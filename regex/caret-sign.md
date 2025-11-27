## Caret Sign `^` — Line Start Anchor (Regex)

The caret `^` is an **anchor** used to match text **only at the beginning of a line** (when placed at the start of a regex pattern, outside square brackets).

### What it does

* `^` matches the **start position** of a line.
* It does **not** match a character, but a **location**.

---

### Examples

#### ✔️ Without `^`

```regex
[0-9]
```

Matches any digit **anywhere** in the line.

Examples:

* `hello 5 world` → matches `5`
* `7 lives` → matches `7`
* `abc3def` → matches `3`

---

#### ✔️ With `^`

```regex
^[0-9]
```

Matches a digit **only if it is at the beginning** of the line.

Examples:

* `7 lives` → matches `7`
* `hello 5 world` → no match
* `abc3def` → no match

---

### Negation inside brackets

When used **inside** square brackets, `^` means **“not”**, not “start of line.”

```regex
[^0-9]
```

Matches any character that is **not** a digit.

Examples:

* `A` → matches
* `?` → matches
* `5` → no match

---

### Summary Table

| Pattern  | Meaning                      |
| -------- | ---------------------------- |
| `^`      | Start of line                |
| `[0-9]`  | Any digit anywhere           |
| `^[0-9]` | A digit only at line start   |
| `[^0-9]` | Any character except a digit |
