import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LinkBack: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const link = "← return to portfolio";
  return (
    <h3 class={classNames(displayClass, "link-back")}>
      <a href="https://dnmurillo.com/" class="link-back">{link}</a>
    </h3>
  )
}

LinkBack.css = `
.link-back {
  color: var(--gray);
}
`

export default (() => LinkBack) satisfies QuartzComponentConstructor
