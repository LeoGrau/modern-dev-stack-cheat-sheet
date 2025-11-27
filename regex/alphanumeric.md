# Alphanumeric

| Character | Description                                                                                                                                                                       | Use     | Admitted Samples |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------- |
| `\w`      | The expression \w is used to find letters, numbers and underscore (_) characters. Let's use the expression \w to find word characters in the text. Sample Text: "abcABC123 _.:!?" | `/\w/g` | `abcABC123 _`    |
| `\W`      | The expression \W is used to find characters other than letters, numbers, and underscores. The exception of `\w`. Sample Text: "abcABC123 _.:!?"                                  | `/\W/g` | ` .:!?`          |
| `\d`      | `\d` is used to find only number characters. Sample Text: "abcABC123 _.:!?"                                                                                                       | `/\d/g` | `123`            |
| `\D`      | `\D` is used to find non-numeric characters. Negation of `\d`.Sample Text: "abcABC123 _.:!?"                                                                                      | `/\D/g` | `abcABC .:!?`    |
| `\s`      | `\s` is used to find only space characters. Sample Text: "abcABC123 .:!?"                                                                                                         | `/\s/g` | ` `              |
| `\S`      | `\S` is used to find non-space characters. Negation of `\s`. Sample Text: "abcABC123 .:!?"                                                                                        | `/\S/g` | `abcABC123.:!?`  |
