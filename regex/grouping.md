# Grouping

| Character | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     | Use                                   | Admitted Samples                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `()`      | We can group an expression and use these groups to reference or enforce some rules. To group an expression, we enclose `()` in parentheses. For now just group haa below. Complete sample: `ha-ha,haa-haa` for evaluation.                                                                                                                                                                                                                      | `/(haa)/g`                            | haa                                                                                                                  |
| `\|`      | It allows to specify that an expression can be in different expressions. Thus, all possible statements are written separated by the pipe sign \|. This differs from charset [abc], charsets operate at the character level. Alternatives are at the expression level. For example, the following expression would select both cat and rat. Add another pipe sign `\|` to the end of the expression and type dog so that all words are selected. | `/(c\|r)at\|dog/g`                    | cat rat dog                                                                                                          |
| `\`       | There are special characters that we use when writing regex. { } [ ] / \ + * . $^ \| ? Before we can select these characters themselves, we need to use an escape character \. For example, to select the dot . and asterisk * characters in the text, let's add an escape character \ before it. **Text Sample**: `(*) Asterisk.`                                                                                                              | `/(\*\|\.)/g`                         | Admited samples. `*` `.`                                                                                             |
| `^`       | Find only characters at the beginning of a line, prefix a expression with the `^` sign.                                                                                                                                                                                                                                                                                                                                                         | 1. `^[0-9]`<br/>                      | Only will match first character with that condition (0-9). For example: `1. 3 eggs, beaten`. Solo hace matching al 1 |
| `$`       | Find only characters at the beginning of a line, prefix a expression with the ^ sign.                                                                                                                                                                                                                                                                                                                                                           | 1. `index.html`<br/>2. `contract.sol` | Matches only the last character especification. Solo marca los `html` y `sol` que esten al final                     |

### Tricky one.

#### Referencing a Group `\n`

Below, we have two groups: `(ha)` and `(haa)`. When we want to reference these groups later in the pattern, we use `\1` for the first group and `\2` for the second group. For example, in the pattern `(ha)-\1,(haa)-\2`, the `-` is outside the groups, and `\1` refers to ha while `\2` refers to haa. Type `\2` at the end of the expression to refer to the second group. Only works with `()`

**Use**

Text: `ha-ha,haa-haa` (All matches)

Regex: `\ (ha)-\1,(haa)-\2 \g`

Ahora para empezar, ese \n solo referencia una instancia en el grupo. Por ejemplo

Text:`hola hola hola`

Regex: `(hola) \1 \1`

#### Parentheses (?: ): Non-capturing Grouping

You can group an expression and ensure that it is not captured by references. For example, below are two groups. However, the first group reference we denote with \1 actually indicates the second group, as the first is a non-capturing group.

**Use**

Text: `ha-ha,haa-haa` (All matches)

Regex: `(?:ha)-ha,(haa)-\1`
