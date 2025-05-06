---
modified: 2025-05-04
created: 2025-05-03
---
```java
import java.nio.charset.StandardCharsets;  
import java.util.*;  
  
public class SkipListTestingBonanza {  
  
    public static class dummyType {  
        int payload;  
  
        public dummyType(int payload) {  
            this.payload = payload;  
        }  
    }  
  
    public static void basicAddTest() {  
        // requires add(), print(). optional: size(), toArray() typed  
        System.out.println("========== basicAddTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        System.out.println("Adding 5...");  
        skiplist.add(5);  
        skiplist.print();  
  
        if (skiplist.add(5)) {  
            System.out.println("You're allowing duplicates into a Set... You're not supposed to do that");  
            return;  
        }  
  
        try {  
            skiplist.add(null);  
            System.out.println("Error: You didn't get the expected NullPointerException for trying to insert a null value");  
            return;  
        }  
        catch (Exception e) {  
            System.out.println("Yay! You got the expected error: " + e.getMessage());  
        }  
  
        // TODO: If this block of code gave you compile errors, congrats!  
        // TODO: It was supposed to do that!        // TODO: You can safely delete the next 5 lines and continue on with the testcases!        SkipListSet<dummyType> skiplist2 = new SkipListSet<>();  
        dummyType value = new dummyType(3);  
        if (skiplist2.add(value)) {  
            System.out.println("You're allowing non-comparable types into your skiplist...");  
        }  
  
  
  
        System.out.println("Adding 3...");  
        skiplist.add(3);  
        skiplist.print();  
  
        System.out.println("Adding 2...");  
        skiplist.add(2);  
        skiplist.print();  
  
        System.out.println("Adding 7...");  
        skiplist.add(7);  
        skiplist.print();  
  
        System.out.println("Adding 20...");  
        skiplist.add(20);  
        skiplist.print();  
  
        System.out.println("Adding 55...");  
        skiplist.add(55);  
        skiplist.print();  
  
        System.out.println("Adding 1...");  
        skiplist.add(1);  
        skiplist.print();  
  
        System.out.println("Adding -59...");  
        skiplist.add(-59);  
        skiplist.print();  
  
        System.out.println("Adding 18...");  
        skiplist.add(18);  
        skiplist.print();  
  
        System.out.println("Adding 2001...");  
        skiplist.add(2001);  
        skiplist.print();  
  
        System.out.println("Adding 33...");  
        skiplist.add(33);  
        skiplist.print();  
  
        System.out.println("Adding -407...");  
        skiplist.add(-407);  
        skiplist.print();  
  
        System.out.println("Adding 0...");  
        skiplist.add(0);  
        skiplist.print();  
  
        System.out.println("Adding 4...");  
        skiplist.add(4);  
        skiplist.print();  
  
        System.out.println("Adding 6...");  
        skiplist.add(6);  
        skiplist.print();  
  
        System.out.println("Adding -1...");  
        skiplist.add(-1);  
        skiplist.print();  
  
        System.out.println("Adding -11...");  
        skiplist.add(-11);  
        skiplist.print();  
  
        System.out.println("Adding 120...");  
        skiplist.add(120);  
        skiplist.print();  
  
        System.out.println("Adding 68...");  
        skiplist.add(68);  
        skiplist.print();  
  
        System.out.println("Adding 14...");  
        skiplist.add(14);  
        skiplist.print();  
  
        System.out.println("Adding 2000...");  
        skiplist.add(2000);  
        skiplist.print();  
  
        System.out.println("Adding 9999...");  
        skiplist.add(9999);  
        skiplist.print();  
  
        System.out.println("Adding -9999...");  
        skiplist.add(-9999);  
        skiplist.print();  
  
        try {  
            Integer[] arr = new Integer[skiplist.size()];  
            skiplist.toArray(arr);  
            boolean inOrder = true;  
            for (int i = 0; i < arr.length - 1; i++) {  
                if (arr[i] != null && arr[i+1] != null && arr[i] > arr[i + 1]) {  
                    System.out.println("Dang, some stuff didn't insert in the right spot on the bottom layer");  
                    inOrder = false;  
                    break;  
                }  
            }  
            if (inOrder) {  
                System.out.println("Yay! Everything on the bottom layer inserted into the right place!");  
            }  
            System.out.println("I can't see the upper layers, so you're on your own for those");  
        }  
        catch (Exception e) {  
  
        }  
    }  
  
    public static void stressTestAdd(String type, int seed, boolean printEveryAdd, int howManyAdds) {  
        // requires add(), print(), size(), toArray() typed  
        if (type.equals("int")) {  
            System.out.println("======== stressTestAdd: Integer Edition =======");  
            SkipListSet<Integer> skiplist = new SkipListSet<>();  
            Integer adding = null;  
            Integer added = 0;  
            Random random = new Random(seed);  
  
            for (int i = 0; i < howManyAdds; i++) {  
                adding = random.nextInt(-9999, 9999);  
                if (skiplist.add(adding)) {  
                    added++;  
                }  
                if (printEveryAdd) {  
                    System.out.println("Adding " + adding + "...");  
                    skiplist.print();  
                }  
            }  
  
            skiplist.print();  
  
            if (added == skiplist.size()) {  
                System.out.println("Skiplist successfully inserted all " + added + " unique generated items");  
            }  
            else {  
                System.out.println("Skiplist failed to insert " + (howManyAdds-skiplist.size()) + " items");  
            }  
  
            Integer[] arr = new Integer[howManyAdds];  
            skiplist.toArray(arr);  
            boolean inOrder = true;  
            for (int i = 0; i < arr.length - 1; i++) {  
                if (arr[i] != null && arr[i+1] != null && arr[i] > arr[i + 1]) {  
                    System.out.println("Dang, some stuff didn't insert in the right spot on the bottom layer");  
                    inOrder = false;  
                    break;  
                }  
            }  
            if (inOrder) {  
                System.out.println("Yay! Everything on the bottom layer inserted into the right place!");  
            }  
            System.out.println("I can't see the upper layers, so you're on your own for those");  
        }  
        else if (type.equals("double")) {  
            System.out.println("======== stressTestAdd: Double Edition =======");  
            SkipListSet<Double> skiplist = new SkipListSet<>();  
            Double adding = null;  
            Integer added = 0;  
            Random random = new Random(seed);  
  
            for (int i = 0; i < howManyAdds; i++) {  
                adding = random.nextDouble(-9999, 9999);  
                if(skiplist.add(adding)) {  
                    added++;  
                }  
                if (printEveryAdd) {  
                    System.out.println("Adding " + adding + "...");  
                    skiplist.print();  
                }  
            }  
  
            skiplist.print();  
  
            if (added == skiplist.size()) {  
                System.out.println("Skiplist successfully inserted all " + added + " unique generated items");  
            }  
            else {  
                System.out.println("Skiplist failed to insert " + (howManyAdds-skiplist.size()) + " items");  
            }  
  
            Double[] arr = new Double[howManyAdds];  
            skiplist.toArray(arr);  
            boolean inOrder = true;  
            for (int i = 0; i < arr.length - 1; i++) {  
                if (arr[i] != null && arr[i+1] != null && arr[i] > arr[i + 1]) {  
                    System.out.println("Dang, some stuff didn't insert in the right spot on the bottom layer");  
                    inOrder = false;  
                    break;  
                }  
            }  
            if (inOrder) {  
                System.out.println("Yay! Everything on the bottom layer inserted into the right place!");  
            }  
            System.out.println("I can't see the upper layers, so you're on your own for those");  
        }  
        else if (type.equals("string")) {  
            System.out.println("======== stressTestAdd: String Edition =======");  
            SkipListSet<String> skiplist = new SkipListSet<>();  
            Random random = new Random(seed);  
            byte[] array = new byte[10]; // length is bounded by 7  
            String adding = null;  
            Integer added = 0;  
  
            for (int i = 0; i < howManyAdds; i++) {  
                new Random().nextBytes(array);  
                adding = new String(array, StandardCharsets.UTF_8);  
                if (skiplist.add(adding)) {  
                    added++;  
                }  
                if (printEveryAdd) {  
                    System.out.println("Adding " + adding + "...");  
                    skiplist.print();  
                }  
            }  
  
            skiplist.print();  
  
            if (added == skiplist.size()) {  
                System.out.println("Skiplist successfully inserted all " + added + " unique generated items");  
            }  
            else {  
                System.out.println("Skiplist failed to insert " + (howManyAdds-skiplist.size()) + " items");  
            }  
  
            String[] arr = new String[howManyAdds];  
            skiplist.toArray(arr);  
            boolean inOrder = true;  
            for (int i = 0; i < arr.length - 1; i++) {  
                if (arr[i] != null && arr[i+1] != null && arr[i].compareTo(arr[i + 1]) > 0) {  
                    System.out.println("Dang, some stuff didn't insert in the right spot on the bottom layer");  
                    inOrder = false;  
                    break;  
                }  
            }  
            if (inOrder) {  
                System.out.println("Yay! Everything on the bottom layer inserted into the right place!");  
            }  
            System.out.println("I can't see the upper layers, so you're on your own for those");  
        }  
        else {  
            System.out.println("Unsupported type. Only use 'int', 'double', or 'string'");  
        }  
    }  
  
    public static void containsTest() {  
        // requires contains(), add(), print()  
        System.out.println("======== containsTest =======");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
  
        for (int i = 0; i < 100; i++) {  
            skiplist.add(i);  
        }  
  
        System.out.println("=== skiplist below should contain 0-99 ===");  
        skiplist.print();  
  
        System.out.println("=== now searching for all values ===");  
        int notFound = 0;  
        for (int i = 0; i < 100; i++) {  
            if (!skiplist.contains(i)) {  
                System.out.println("Couldn't find " + i);  
                notFound++;  
            }  
        }  
        if (notFound == 0) {  
            System.out.println("Successfully found all values");  
        }  
        else {  
            System.out.println("Couldn't find " + notFound + " values");  
        }  
  
        System.out.println("=== now searching for values not in the list ===");  
        int found = 0;  
        for (int i = 100; i < 200; i++) {  
            if (skiplist.contains(i)) {  
                System.out.println("Somehow found " + i);  
                found++;  
            }  
        }  
        if (found == 0) {  
            System.out.println("Yay! No false positives when searching for values not in the list");  
        }  
        else {  
            System.out.println("Somehow found " + found + " values");  
        }  
  
        System.out.println("=== now searching for null ===");  
        try {  
            skiplist.contains(null);  
            System.out.println("Error: you are searching for a null value. You should've thrown a NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! Got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("=== now searching for noncomparable values ===");  
        dummyType value = new dummyType(5);  
  
        try {  
            skiplist.contains(value);  
            System.out.println("Error: you are searching for a noncomparable value. You should've thrown a ClassCastException");  
        }  
        catch (ClassCastException e) {  
            System.out.println("Yay! Got the expected ClassCastException: " + e.getMessage());  
        }  
  
    }  
  
    public static void removeTest() {  
        // requires add(), remove(), print()  
        System.out.println("========== removeTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(5);  
        skiplist.add(6);  
        skiplist.add(7);  
        skiplist.add(8);  
        skiplist.add(9);  
        skiplist.add(10);  
        System.out.println("=== skiplist below should contain 5 6 7 8 9 10 ===");  
        skiplist.print();  
        skiplist.remove(5);  
        System.out.println("===== removeTest 1: removing the first node =====");  
        System.out.println("=== skiplist below should contain 6 7 8 9 10 ===");  
        skiplist.print();  
        skiplist.remove(8);  
        System.out.println("===== removeTest 2: removing a middle node =====");  
        System.out.println("=== skiplist below should contain 6 7 9 10 ===");  
        skiplist.print();  
        System.out.println("===== removeTest 3: removing the last node =====");  
        System.out.println("=== skiplist below should contain 6 7 9 ===");  
        skiplist.remove(10);  
        skiplist.print();  
        System.out.println("===== removeTest 4: removing nodes until it's empty =====");  
        System.out.println("=== skiplist below should contain 6 7 ===");  
        skiplist.remove(9);  
        skiplist.print();  
        System.out.println("=== skiplist below should contain 6 ===");  
        skiplist.remove(7);  
        skiplist.print();  
        System.out.println("=== skiplist below should be empty ===");  
        skiplist.remove(6);  
        skiplist.print();  
    }  
  
    public static void reBalanceTest() {  
        // requires add(), reBalance(), print()  
        System.out.println("========== reBalanceTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        for (int i = 0; i < 100; i++) {  
            skiplist.add(i);  
        }  
  
        System.out.println("=== skiplist below should contain 0-99 ===");  
        skiplist.print();  
  
        System.out.println("=== and now we're gonna call reBalance a bunch of times ===");  
        System.out.println("=== only the height of the nodes should change, not the height of the skiplist itself ===");  
        for (int i = 0; i < 5; i++) {  
            System.out.println("=== reBalance " + (i+1) + " ===");  
            skiplist.reBalance();  
            skiplist.print();  
        }  
    }  
  
    public static void growAndShrinkTest() {  
        // requires add(), remove(), print()  
        System.out.println("========== growAndShrinkTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(5);  
        skiplist.add(3);  
        skiplist.add(2);  
        skiplist.add(7);  
        skiplist.add(20);  
        skiplist.add(55);  
        skiplist.add(1);  
        skiplist.add(-59);  
        skiplist.add(18);  
        skiplist.add(2001);  
        System.out.println("=== skiplist below should have the minimum number of layers ===");  
        skiplist.print();  
        skiplist.add(33);  
        skiplist.add(-407);  
        skiplist.add(0);  
        skiplist.add(4);  
        skiplist.add(6);  
        skiplist.add(10);  
        skiplist.add(11);  
        skiplist.add(12);  
        skiplist.add(13);  
        skiplist.add(14);  
        skiplist.add(15);  
        skiplist.add(16);  
        skiplist.add(17);  
        skiplist.add(19);  
        skiplist.add(21);  
        skiplist.add(22);  
        skiplist.add(23);  
        skiplist.add(24);  
        skiplist.add(25);  
        skiplist.add(26);  
        skiplist.add(27);  
        skiplist.add(28);  
        skiplist.add(29);  
        skiplist.add(30);  
        skiplist.add(31);  
        skiplist.add(32);  
        skiplist.add(101);  
        skiplist.add(102);  
        skiplist.add(103);  
        skiplist.add(104);  
        skiplist.add(105);  
        skiplist.add(106);  
        skiplist.add(107);  
        skiplist.add(108);  
        skiplist.add(109);  
        skiplist.add(110);  
        System.out.println("=== skiplist below should have grown a layer or two ===");  
        skiplist.print();  
        skiplist.remove(420);  
        skiplist.remove(15);  
        skiplist.remove(16);  
        skiplist.remove(19);  
        skiplist.remove(21);  
        skiplist.remove(22);  
        skiplist.remove(23);  
        skiplist.remove(24);  
        skiplist.remove(25);  
        skiplist.remove(26);  
        skiplist.remove(27);  
        skiplist.remove(28);  
        skiplist.remove(29);  
        skiplist.remove(30);  
        skiplist.remove(31);  
        skiplist.remove(32);  
        skiplist.remove(101);  
        skiplist.remove(102);  
        skiplist.remove(103);  
        skiplist.remove(104);  
        skiplist.remove(105);  
        skiplist.remove(106);  
        skiplist.remove(107);  
        skiplist.remove(108);  
        skiplist.remove(109);  
        skiplist.remove(110);  
        System.out.println("=== skiplist below should have shrunk a layer or two ===");  
        skiplist.print();  
  
    }  
  
    public static void basicsTest() {  
        // requires size(), isEmpty(), first(), last(), add(), print()  
        System.out.println("========== basicsTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
  
        System.out.println("=== output below should be 0 true ===");  
        System.out.println(skiplist.size());  
        System.out.println(skiplist.isEmpty());  
        try {  
            skiplist.first();  
            System.out.println("Error: Didn't get the expected NoSuchElementException");  
        }  
        catch (NoSuchElementException e) {  
            System.out.println("Yay! You got the expected NoSuchElementException: " + e.getMessage());  
        }  
        try {  
            skiplist.last();  
            System.out.println("Error: Didn't get the expected NoSuchElementException");  
        }  
        catch (NoSuchElementException e) {  
            System.out.println("Yay! You got the expected NoSuchElementException: " + e.getMessage());  
        }  
  
        skiplist.add(1);  
        System.out.println("=== skiplist below should contain 1 ===");  
        skiplist.print();  
        System.out.println("=== output below should be 1 false 1 1 ===");  
        System.out.println(skiplist.size() + " " + skiplist.isEmpty() + " " + skiplist.first() + " " + skiplist.last());  
        skiplist.add(3);  
        System.out.println("=== skiplist below should contain 1 3 ===");  
        skiplist.print();  
        System.out.println("=== output below should be 2 false 1 3 ===");  
        System.out.println(skiplist.size() + " " + skiplist.isEmpty() + " " + skiplist.first() + " " + skiplist.last());  
        skiplist.add(2);  
        skiplist.add(4);  
        System.out.println("=== skiplist below should contain 1 2 3 4 ===");  
        skiplist.print();  
        System.out.println("=== output below should be 4 false 1 4 ===");  
        System.out.println(skiplist.size() + " " + skiplist.isEmpty() + " " + skiplist.first() + " " + skiplist.last());  
    }  
  
    public static void clearTest() {  
        // requires clear(), size(), isEmpty(), first(), last(), add(), print()  
        System.out.println("========== clearTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
        System.out.println("=== skiplist below should contain 1 2 3 ===");  
        skiplist.print();  
        System.out.println("=== output below should be 3 false 1 3 ===");  
        System.out.println(skiplist.size() + " " + skiplist.isEmpty() + " " + skiplist.first() + " " + skiplist.last());  
        System.out.println("=== now adding a ton of ints to grow the skiplist ===");  
        for (int i = 0; i < 100; i++) {  
            skiplist.add(i);  
        }  
        System.out.println("=== skiplist below should contain values 0-99 ===");  
        skiplist.print();  
  
        System.out.println("=== now clearing skiplist ===");  
        skiplist.clear();  
  
        System.out.println("=== skiplist below should be empty ===");  
        skiplist.print();  
        System.out.println("=== values below should be 0 true ===");  
        System.out.println(skiplist.size() + " " + skiplist.isEmpty());  
        System.out.println("=== now testing first and last ===");  
        try {  
            skiplist.first();  
            System.out.println("Error: first() didn't give the expected NoSuchElementException");  
        }  
        catch (NoSuchElementException e) {  
            System.out.println("Yay! first() works here! You got the expected NoSuchElementException: " + e.getMessage());  
        }  
        try {  
            skiplist.last();  
            System.out.println("Error: last() didn't give the expected NoSuchElementException");  
        }  
        catch (NoSuchElementException e) {  
            System.out.println("Yay! last() works here! You got the expected NoSuchElementException: " + e.getMessage());  
        }  
        System.out.println("=== now attempting to add to cleared skiplist ===");  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
        System.out.println("=== skiplist below should contain 1 2 3 ===");  
        skiplist.print();  
    }  
  
    public static void equalsTest() {  
        // requires add(), print(), equals()  
        System.out.println("========== equalsTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
        skiplist.add(4);  
        skiplist.add(5);  
        System.out.println("=== skiplist below should contain 1 2 3 4 5 ===");  
        skiplist.print();  
  
        System.out.println("===== equalsTest 1: not a set =====");  
        LinkedList<Integer> linkedList = new LinkedList<>();  
        linkedList.add(1);  
        linkedList.add(2);  
        linkedList.add(3);  
        linkedList.add(4);  
        linkedList.add(5);  
        System.out.println("=== output below should be false ===");  
        System.out.println(skiplist.equals(linkedList));  
  
        System.out.println("===== equalsTest 2: valid set, some values equal =====");  
        TreeSet<Integer> treeset = new TreeSet<>();  
        treeset.add(1);  
        treeset.add(2);  
        treeset.add(3);  
  
        System.out.println("=== output below should be false ===");  
        System.out.println(skiplist.equals(treeset));  
  
        System.out.println("===== equalsTest 3: valid set, no values equal =====");  
        treeset.clear();  
        treeset.add(10);  
        treeset.add(11);  
        System.out.println("=== output below should be false ===");  
        System.out.println(skiplist.equals(treeset));  
  
        System.out.println("===== equalsTest 4: valid set, all values equal =====");  
        treeset.clear();  
        treeset.add(1);  
        treeset.add(2);  
        treeset.add(3);  
        treeset.add(4);  
        treeset.add(5);  
        System.out.println("=== output below should be true ===");  
        System.out.println(skiplist.equals(treeset));  
    }  
  
    public static void hashCodeTest() {  
        // requires add(), print(), hashCode()  
        System.out.println("========== hashCodeTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        System.out.println("=== skiplist below should be empty ===");  
        skiplist.print();  
        System.out.println("=== hashCode below should be 0 ===");  
        System.out.println(skiplist.hashCode());  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
        skiplist.add(4);  
        skiplist.add(5);  
        System.out.println("=== skiplist below should contain 1 2 3 4 5 ===");  
        skiplist.print();  
        System.out.println("=== hashCode below should be 15 ===");  
        System.out.println(skiplist.hashCode());  
    }  
  
    public static void collectionConstructorTest() {  
        // requires add(), print()  
        System.out.println("========== collectionConstructorTest ==========");  
        System.out.println("===== collectionContructorTest 1: some collection =====");  
        LinkedList<Integer> linkedlist = new LinkedList<>();  
        linkedlist.add(1);  
        linkedlist.add(2);  
        linkedlist.add(3);  
        linkedlist.add(4);  
        linkedlist.add(5);  
        SkipListSet<Integer> skiplist = new SkipListSet<>(linkedlist);  
        System.out.println("=== skiplist below should contain 1 2 3 4 5 ===");  
        skiplist.print();  
        System.out.println("===== collectionContructorTest 2: your own skiplist =====");  
        SkipListSet<Integer> skiplist2 = new SkipListSet<>();  
        skiplist2.add(1);  
        skiplist2.add(2);  
        skiplist2.add(3);  
        skiplist2.add(4);  
        skiplist2.add(5);  
        SkipListSet<Integer> skiplist3 = new SkipListSet<>(skiplist2);  
        System.out.println("=== both skiplists below should contain 1 2 3 4 5 ===");  
        System.out.println("=== skiplist 1 ===");  
        skiplist2.print();  
        System.out.println("=== skiplist 2 ===");  
        skiplist3.print();  
        System.out.println("===== collectionConstructorTest 3: a null collection =====");  
        try {  
            SkipListSet<Integer> skiplist4 = new SkipListSet<>(null);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
    }  
  
    public static void iteratorTest() {  
        // skiplist requires add(), print(), iterator(). skiplistiterator requires hasNext() next() remove()  
        System.out.println("========== iteratorTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
        skiplist.add(4);  
        skiplist.add(5);  
        System.out.println("=== skiplist below should contain 1 2 3 4 5 ===");  
        skiplist.print();  
  
        System.out.println("===== iteratorTest 1: does it iterate over all elements =====");  
        Iterator<Integer> iterator = skiplist.iterator();  
  
        System.out.println("=== iterator below should show 1 2 3 4 5 ===");  
        Integer value = null;  
        while (iterator.hasNext()) {  
            value = iterator.next();  
            System.out.println(value);  
        }  
  
        System.out.println("===== iteratorTest 2: can it remove the first element =====");  
        iterator = skiplist.iterator();  
        value = null;  
  
        if (iterator.hasNext()) {  
            value = iterator.next();  
            iterator.remove();  
            System.out.println("removing " + value);  
        }  
  
        System.out.println("=== skiplist below should contain 2 3 4 5 ===");  
        skiplist.print();  
  
        System.out.println("===== iteratorTest 3: can it remove a random middle element =====");  
        iterator = skiplist.iterator();  
        int steps = 2;  
        value = null;  
  
        for (int i = 0; i < steps; i++) {  
            if (iterator.hasNext()) {  
                value = iterator.next();  
            }  
        }  
  
        iterator.remove();  
        System.out.println("removing " + value);  
  
        System.out.println("=== skiplist below should contain 2 4 5 ===");  
        skiplist.print();  
  
        System.out.println("===== iteratorTest 4: can it remove the last element =====");  
        iterator = skiplist.iterator();  
        value = null;  
  
        while (iterator.hasNext()) {  
            value = iterator.next();  
        }  
  
        iterator.remove();  
        System.out.println("removing " + value);  
  
        System.out.println("=== skiplist below should contain 2 4 ===");  
        skiplist.print();  
  
        System.out.println("===== iteratorTest 5: does it prevent multiple removes in a row =====");  
        iterator = skiplist.iterator();  
        value = null;  
  
        if (iterator.hasNext()) {  
            value = iterator.next();  
            iterator.remove();  
            System.out.println("removing " + value);  
        }  
  
        try {  
            iterator.remove();  
            System.out.println("Error: Second remove() worked when it shouldn't");  
        } catch (IllegalStateException e) {  
            System.out.println("Yay! We got the expected IllegalStateException on second remove(): " + e.getMessage());  
        }  
  
        System.out.println("===== iteratorTest 6: does it prevent you from nexting too much =====");  
        for (int i = 0; i < 10; i++) {  
            skiplist.add(i);  
        }  
  
        System.out.println("=== skiplist below should contain 0 1 2 3 4 5 6 7 8 9 ===");  
        skiplist.print();  
        iterator = skiplist.iterator();  
        value = null;  
        System.out.println("=== now spamming next ===");  
  
        try {  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            value = iterator.next();  
            System.out.println(value);  
            System.out.println("Error: You didn't get the expected NoSuchElementException");  
        } catch (NoSuchElementException e) {  
            System.out.println("Yay! We got the expected NoSuchElementException from spamming next(): " + e.getMessage());  
        }  
    }  
  
    public static void addAllTest() {  
        // requires addAll(), print()  
        System.out.println("========== addAllTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
  
        System.out.println("===== addAllTest 1: collection is null =====");  
        try {  
            skiplist.addAll(null);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("===== addAllTest 2: collection is valid =====");  
        LinkedList<Integer> linkedlist = new LinkedList<>();  
        linkedlist.add(1);  
        linkedlist.add(2);  
        linkedlist.add(3);  
  
        skiplist.addAll(linkedlist);  
        System.out.println("=== skiplist below should contain 1 2 3 ===");  
        skiplist.print();  
  
        System.out.println("===== addAllTest 3: collection contains a null value =====");  
        linkedlist.add(null);  
  
        SkipListSet<Integer> skiplist2 = new SkipListSet<>();  
        try {  
            skiplist2.addAll(linkedlist);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
    }  
  
    public static void removeAllTest() {  
        // requires add(), print(), removeAll()  
        System.out.println("========== removeAllTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
        skiplist.add(4);  
        skiplist.add(5);  
        System.out.println("=== skiplist below should contain 1 2 3 4 5 ===");  
        skiplist.print();  
        System.out.println("===== removeAllTest 1: collection is null =====");  
        try {  
            skiplist.removeAll(null);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("===== removeAllTest 2: collection is valid =====");  
        LinkedList<Integer> linkedlist = new LinkedList<>();  
        linkedlist.add(1);  
        linkedlist.add(2);  
        linkedlist.add(3);  
  
        skiplist.removeAll(linkedlist);  
        System.out.println("=== skiplist below should contain 4 5 ===");  
        skiplist.print();  
  
        System.out.println("===== removeAllTest 3: collection contains a null value =====");  
        linkedlist.add(null);  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
  
        try {  
            skiplist.removeAll(linkedlist);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("===== removeAllTest 4: collection contains an incomparable value =====");  
        LinkedList<dummyType> linkedlist2 = new LinkedList<>();  
        dummyType value = new dummyType(5);  
        linkedlist2.add(value);  
  
        try {  
            skiplist.removeAll(linkedlist2);  
            System.out.println("Error: Did not get the expected ClassCastException");  
        }  
        catch (ClassCastException e) {  
            System.out.println("Yay! You got the expected ClassCastException: " + e.getMessage());  
        }  
    }  
  
    public static void containsAllTest() {  
        // requires add(), print(), containsAll()  
        System.out.println("========== containsAllTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(1);  
        skiplist.add(2);  
        skiplist.add(3);  
        skiplist.add(4);  
        skiplist.add(5);  
        System.out.println("=== skiplist below should contain 1 2 3 4 5 ===");  
        skiplist.print();  
  
        System.out.println("===== containsAllTest 1: collection is null =====");  
        try {  
            skiplist.containsAll(null);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("===== containsAllTest 2: collection is valid and skiplist has all values =====");  
        LinkedList<Integer> linkedlist = new LinkedList<>();  
        linkedlist.add(1);  
        linkedlist.add(2);  
        linkedlist.add(3);  
        System.out.println("=== output below should be true ===");  
        System.out.println(skiplist.containsAll(linkedlist));  
  
        System.out.println("===== containsAllTest 3: collection contains a null value =====");  
        linkedlist.add(null);  
  
        try {  
            skiplist.containsAll(linkedlist);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("===== containsAllTest 4: collection is valid and skiplist only has some values =====");  
        LinkedList<Integer> linkedlist2 = new LinkedList<>();  
        linkedlist2.add(1);  
        linkedlist2.add(2);  
        linkedlist2.add(200);  
        System.out.println("=== output below should be false ===");  
        System.out.println(skiplist.containsAll(linkedlist2));  
  
        System.out.println("===== containsAllTest 5: collection is valid and skiplist contains none of the values =====");  
        LinkedList<Integer> linkedlist3 = new LinkedList<>();  
        linkedlist3.add(6);  
        linkedlist3.add(7);  
        linkedlist3.add(8);  
        System.out.println("===== output below should be false ===");  
        System.out.println(skiplist.containsAll(linkedlist3));  
  
        System.out.println("===== containsAllTest 6: collection contains an incomparable value =====");  
        LinkedList<dummyType> linkedlist4 = new LinkedList<>();  
        dummyType value = new dummyType(5);  
        linkedlist4.add(value);  
  
        try {  
            skiplist.containsAll(linkedlist4);  
            System.out.println("Error: Did not get the expected ClassCastException");  
        }  
        catch (ClassCastException e) {  
            System.out.println("Yay! You got the expected ClassCastException: " + e.getMessage());  
        }  
  
    }  
  
    public static void retainAllTest() {  
        // requires add(), retainAll(), print()  
        System.out.println("========== retainAllTest ==========");  
        System.out.println("===== retainAllTest 1: given collection is valid =====");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(5);  
        skiplist.add(10);  
        skiplist.add(15);  
  
        System.out.println("=== skiplist below should contain 5 10 15 ===");  
        skiplist.print();  
  
        LinkedList<Integer> linkedlist = new LinkedList<>();  
        linkedlist.add(5);  
        linkedlist.add(10);  
        linkedlist.add(12);  
  
        skiplist.retainAll(linkedlist);  
        System.out.println("=== skiplist below should contain 5 10 ===");  
        skiplist.print();  
  
        System.out.println("===== retainAllTest 2: given collection is null =====");  
        LinkedList<Integer> linkedlist2 = null;  
  
        try {  
            skiplist.retainAll(linkedlist2);  
            System.out.println("Error: Did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! You got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("===== retainAllTest 3: given collection is partially valid =====");  
        SkipListSet<Integer> skiplist2 = new SkipListSet<>();  
        skiplist2.add(5);  
        skiplist2.add(10);  
        skiplist2.add(15);  
  
        System.out.println("=== skiplist below should contain 5 10 15 ===");  
        skiplist2.print();  
  
        LinkedList<Integer> linkedlist3 = new LinkedList<>();  
        linkedlist3.add(5);  
        linkedlist3.add(10);  
        linkedlist3.add(null);  
        linkedlist3.add(12);  
  
        skiplist.retainAll(linkedlist3);  
        System.out.println("=== skiplist below should contain 5 10 or 5 10 15. Your choice ===");  
        skiplist.print();  
    }  
  
    public static void toArrayTest() {  
        // requires add(), toArray(), print()  
        System.out.println("========== toArrayTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(5);  
        skiplist.add(10);  
        skiplist.add(15);  
  
        System.out.println("=== skiplist below should contain 5 10 15 ===");  
        skiplist.print();  
  
        System.out.println("=== array below should contain 5 10 15 ===");  
        System.out.println(Arrays.toString(skiplist.toArray()));  
    }  
  
    public static void toArrayTypedTest() {  
        // requires add(), size(), print(), toArray() typed version  
        System.out.println("========== toArrayTypedTest ==========");  
        SkipListSet<Integer> skiplist = new SkipListSet<>();  
        skiplist.add(5);  
        skiplist.add(10);  
        skiplist.add(15);  
  
        System.out.println("=== skiplist below should contain 5 10 15 ===");  
        skiplist.print();  
  
        System.out.println("===== toArrayTypedTest 1: array of matching size =====");  
        Integer[] array = new Integer[skiplist.size()];  
        System.out.println("before calling toArray: " + Arrays.toString(array));  
        skiplist.toArray(array);  
        System.out.println("=== array below should contain 5 10 15 ===");  
        System.out.println("after calling toArray: " + Arrays.toString(array));  
  
        System.out.println("===== toArrayTypedTest 2: testing array of a too small size =====");  
        Integer[] array2 = new Integer[1];  
        System.out.println("before calling toArray: " + Arrays.toString(array2));  
        skiplist.toArray(array2);  
        System.out.println("after calling toArray (should match above): " + Arrays.toString(array2));  
        array2 = skiplist.toArray(array2);  
        System.out.println("=== array below should contain 5 10 15 ===");  
        System.out.println("after calling toArray and catching the result: " + Arrays.toString(array2));  
  
        System.out.println("===== toArrayTypedTest 3: testing array of a larger size =====");  
        Integer[] array3 = new Integer[5];  
        Arrays.fill(array3, 95);  
        System.out.println("before calling toArray: " + Arrays.toString(array3));  
        skiplist.toArray(array3);  
        System.out.println("=== array below should contain 5 10 15 null 95 ===");  
        System.out.println("after calling toArray: " + Arrays.toString(array3));  
  
        System.out.println("=== toArrayTypedTest 4: testing null array ===");  
        Integer[] array4 = null;  
  
        try {  
            skiplist.toArray(array4);  
            System.out.println("Error: We did not get the expected NullPointerException");  
        }  
        catch (NullPointerException e) {  
            System.out.println("Yay! We got the expected NullPointerException: " + e.getMessage());  
        }  
  
        System.out.println("=== toArrayTypedTest5: testing array compatibility ===");  
        Object[] array5 = new Object[skiplist.size()];  
        Number[] array6 = new Number[skiplist.size()];  
        Integer[] array7 = new Integer[skiplist.size()];  
        String[] array8 = new String[skiplist.size()];  
  
        try {  
            skiplist.toArray(array5);  
            System.out.println("Yay! We successfully put Integers in an Object Array!");  
        } catch (ArrayStoreException e){  
            System.out.println("Error: We got an unexpected ArrayStoreException: " + e.getMessage());  
        }  
  
        try {  
            skiplist.toArray(array6);  
            System.out.println("Yay! We successfully put Integers in a Number Array!");  
        } catch (ArrayStoreException e){  
            System.out.println("Error: We got an unexpected ArrayStoreException: " + e.getMessage());  
        }  
  
        try {  
            skiplist.toArray(array7);  
            System.out.println("Yay! We successfully put Integers in an Integer Array!");  
        } catch (ArrayStoreException e){  
            System.out.println("Error: We got an unexpected ArrayStoreException: " + e.getMessage());  
        }  
  
        try {  
            skiplist.toArray(array8);  
            System.out.println("Error: We successfully put Integers in a String Array. This should've thrown an ArrayStoreException");  
        } catch (ArrayStoreException e){  
            System.out.println("Yay! We got the expected ArrayStoreException: " + e.getMessage());  
        }  
    }  
  
    public static void main(String args[]) {  
        /*  
         * TODO: !!!IMPORTANT!!!         * TODO: If your skiplist doesn't have a print() method, these testcases will be pretty fucking useless         * TODO: Either make one to use them as intended or modify the code yourself         * TODO: NOTE: If you choose to modify the testcases to work without print() I WILL NOT HELP YOU         * TODO: figure out what's wrong in chat. You'll be on your own, got it?         * TODO: !!!IMPORTANT!!!         */  
        basicAddTest(); // requires add(), print(). optional: size(), toArray() typed  
  
        /* TODO: Parameters:         * TODO: 1. string: type to add         * TODO: 2. int: seed for random         * TODO: 3. bool: print skiplist after every add         * TODO: 4. int: number of elements to add         */        // stressTestAdd("int", 1, true, 20);   // requires add(), print(), size(), toArray() typed version        // stressTestAdd("int", 555, true, 100);    // requires add(), print(), size(), toArray() typed version        // stressTestAdd("int", 19, false, 1000);   // requires add(), print(), size(), toArray() typed version  
        // stressTestAdd("double", 12, true, 20);   // requires add(), print(), size(), toArray() typed version        // stressTestAdd("double", 50977, true, 100);   // requires add(), print(), size(), toArray() typed version        // stressTestAdd("double", 2323, false, 1000);  // requires add(), print(), size(), toArray() typed version  
        // stressTestAdd("string", 3, true, 20);    // requires add(), print(), size(), toArray() typed version        // stressTestAdd("string", 88, true, 100);  // requires add(), print(), size(), toArray() typed version        // stressTestAdd("string", 56789, false, 1000); // requires add(), print(), size(), toArray() typed version  
        // containsTest(); // requires add(), contains(), print()        // removeTest();  // requires add(), remove(), print()  
        // reBalanceTest();    // requires add(), reBalance(), print()  
        // growAndShrinkTest();    // requires add(), remove(), print()  
        // basicsTest();   // requires size(), isEmpty(), first(), last(), add(), print()        // clearTest();    // requires clear(), size(), isEmpty(), first(), last(), add(), print()        // equalsTest();   // requires add(), print(), equals()        // hashCodeTest(); // requires add(), print(), hashCode()  
        // collectionConstructorTest();    // requires add(), print()        // iteratorTest();     // skiplist requires add(), print(), iterator(). skiplistiterator requires hasNext() next() remove()  
        // addAllTest();   // requires addAll(), print()        // removeAllTest();    // requires add(), print(), removeAll()        // containsAllTest();  // requires add(), print(), containsAll()        // retainAllTest();    // requires add(), retainAll(), print()  
        // toArrayTest();  // requires add(), toArray(), print()        // toArrayTypedTest(); // requires add(), size(), print(), toArray() typed version    }  
}
```
