---
created: 2025-05-14
modified: 2025-05-17
---
I started looking for affordable hosting for my [[wordpress blog]] and started with AWS Lightsail, then Hetzner, and then realized I was getting really into the [[server hardening]] side of things and wanted to host more apps, like my [[rail royale]] game and my [[discord to obsidian bot]]. Cloudflare workers wouldn't work for the discord->obsidian bot and running a serverless go project is a lot more annoying than a serverless javascript project, so self-hosting entered the radar and well.... now I have a bunch of mini pcs on their way to start with :D

I spent like 4 days deep in research land and now all my youtube recommendations are homelab-related :D

> For future reference:
> [[Console Commands Cheatsheet]]

## Current Homelab Plan
- Raspberry Pi 4 - control plane
- Dell OptiPlex 7070 - prod server
- HP EliteDesk 800 G5 - dev server
- HP EliteDesk 800 G4 - nas and media server

---

### 🍓 Raspberry Pi 4 – Control Plane
**Primary Role:** DNS, monitoring, remote access entry point, system visibility

#### 🛠️ Tools & Services
| Tool                     | Purpose                                                             |
| ------------------------ | ------------------------------------------------------------------- |
| Raspberry Pi OS Lite     | OS optimized for the Pi                                             |
| AdGuard Home             | DNS server with ad-blocking, split DNS, and local domain resolution |
| WireGuard (Server)       | VPN into the homelab from anywhere                                  |
| NTP Server               | Keeps accurate LAN time across all machines for logs and stuff      |
| Uptime Kuma              | Monitoring for NAS, Dev Server, and exposed services                |
| Logrotate                | Prevents logs from eating up all my storage                         |
| Unattended-Upgrades      | Keeps OS updated                                                    |
| UFW                      | Keeps ports closed                                                  |
| ncdu, htop, vnstat       | Tools for inspecting disk, RAM, and network usage                   |
| rpi-clone + rsync to NAS | Backups of Pi config to NAS                                         |
| Dashy                    | Dashboard with buttons to restart podman containers                 |

#### 🔗 Integrations
- Pushes pings to Uptime Kuma when NAS, Dev, or Prod go down
- DNS + Split DNS resolution for all machines
- Hosts VPN entry to access internal-only services

---

### 🧠 Dell OptiPlex 7070 – Prod Server
**Primary Role:** Public-facing services, bots, AI workloads (eventually :') ), blogs

#### 🛠️ Tools & Services
| Tool                | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| Ubuntu Server       | No desktop experience needed for prod                       |
| Podman + Compose    | More secure containers than docker                          |
| Podman auto-update  | Keeps containers updated                                    |
| Traefik             | Reverse proxy with HTTPS and LAN hostname routing           |
| Cloudflare Tunnel   | Public access without opening ports on the router           |
| Cloudflare Access   | For semi-public access via login only without opening ports |
| PostgreSQL          | Main database where needed                                  |
| Logrotate           | Prevents logs from eating up storage                        |
| Unattended-Upgrades | Keeps OS updated                                            |
| ZRAM                | Acts as extra ram when under load                           |
| UFW                 | Keeps ports closed                                          |
| Fail2Ban            | Protects SSH and exposed services from brute force attacks  |
| CrowdSec            | Smarter brute force attack protection                       |
| WireGuard (Client)  | VPN in from anywhere                                        |
| rsync to NAS        | Backup configs, data, and containers                        |

#### 🔗 Integrations
- Exposes public services via Traefik + Cloudflare Tunnel
- Syncs backup data to NAS via rsync
- DNS resolution + NTP sync via Pi
- Monitored via Uptime Kuma on Pi
- Connects to Pi via WireGuard

---

### 🧠 HP EliteDesk 800 G5 – Dev Server
**Primary Role:** Staging apps, dev environment, remote GUI

#### 🛠️ Tools & Services
| Tool                 | Purpose                                             |
| -------------------- | --------------------------------------------------- |
| Ubuntu Desktop       | GUIs are nice when it's just me                     |
| Podman + Compose     | Mirrors prod container architecture                 |
| Podman auto-update   | Keeps containers updated                            |
| Samba                | For sharing files to my main pc                     |
| Sunshine + Moonlight | Ability to remote in and have a desktop             |
| Logrotate            | Prevents logs from eating up storage                |
| Unattended-Upgrades  | Keeps OS updated                                    |
| ZRAM                 | Acts as extra ram when under load                   |
| UFW                  | Keeps ports closed                                  |
| Fail2Ban             | Protects SSH and apps from brute force attacks      |
| CrowdSec             | For extra hardening when testing public-facing apps |
| WireGuard (Client)   | VPN in from anywhere                                |
| rsync to NAS         | Backup configs and containers to NAS                |

#### 🔗 Integrations
- Mirrors prod setup for safe testing
- Syncs backup data to NAS via rsync
- DNS resolution + NTP sync via Pi
- Monitored via Uptime Kuma on Pi
- Connects to Pi via WireGuard

---

### 💾 HP EliteDesk 800 G4 – NAS & Media Server
**Primary Role:** Always-on backup target, media hub, local-first cloud

#### 🛠️ Tools & Services
| Tool                | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| Proxmox VE          | OS Designed for NAS things, useful for future expansion |
| LXC + Podman        | Proxmox-integrated container management                 |
| Podman auto-update  | Keeps containers updated                                |
| ZFS                 | For keeping backups of all my containers and apps       |
| Samba               | For sharing files to my main pc                         |
| Jellyfin            | Media server for old dvds and cds                       |
| Immich              | Self-hosted photo and video gallery                     |
| Dawarich            | Self-hosted google maps timeline alternative            |
| Paperless-ngx       | Self-hosted document management and OCR                 |
| File Browser        | For sharing files to mobile devices over VPN            |
| SMART monitoring    | Disk health via Proxmox                                 |
| UFW                 | Keep ports closed                                       |
| Logrotate           | Prevents logs from eating up storage                    |
| Unattended-Upgrades | Keeps OS updated                                        |
| WireGuard (Client)  | VPN in from anywhere                                    |

#### 🔗 Integrations
- Receives backups from Dev and Prod servers via rsync
- DNS resolution + NTP sync via Pi
- Monitored via Uptime Kuma on Pi
- Connects to Pi via WireGuard
- Shares files/media via Samba and File Browser to my other devices
- Run df in a script and sends Uptime Kuma alerts if free space gets low

---

### Notes
- UFW is used across all machines
- CrowdSec + Fail2Ban run on servers with publicly exposed services
- Dev and Prod do not pull from NAS unless recovering from data loss
- Scheduled smartctl checks on all machines to alert me if a drive is about to go bad
- Uptime Kuma monitors backups and updates and sends a message when they do it successfully or unsuccessfully