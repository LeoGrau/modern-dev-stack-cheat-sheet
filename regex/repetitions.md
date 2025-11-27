# Repetions

Some special characters are used to specify how many times a character will be repeated in the text. These special characters are the plus `+`, the asterisk `*`, and the question mark `?`.

| Character | Description                                                                                                                                                                                                                                                                                                           | Use        | Admitted Samples |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- |
| `*`       | Indicates that the character may either not match at all or can match many times (0 or more.)                                                                                                                                                                                                                         | \be*r\g    | br, ber, beer    |
| `+`       | Indicate that a character can occur one or more times, we put a plus sign + after a character (1 or more.)                                                                                                                                                                                                            | \be+r\g    | ber, beer        |
| `?`       | Indicate that a character is optional, we put a ? question mark after a character. (1 or 0)                                                                                                                                                                                                                           | \colou?r\g | color, colour    |
| `{n}`     | Express a certain number of occurrences of a character, at the end we write curly braces {n} along with how many times we want it to occur                                                                                                                                                                            | \be{2}r\g  | beer             |
| `{n,}`    | Express at least a certain number of occurrences of a character, immediately after the character we write at least how many times we want it to occur in a row followed by a comma , and wrapped inside curly braces {n, }. For example, indicate that the following letter e can occur at least 3 times. (n or more) | \be{3,}r\g | beeer, beeeeer   |
| `{n,m}`   | To express the occurrence of a character in a certain number range, we write curly braces {x,y} for the inclusive interval. For example, indicate that the following letter e can only occur between 1 and 3 times in a row. (n or m, including n and m).                                                             | \be{1,3}\g | ber, beer, beeer |

## Exercises

1. Write the expression using curly braces {} that will find texts containing 4 numbers side by side. Remember that the range [0-9] will match a single digit.C

        `Release 10/9/2021`

        Ans: `\ [0-9]{4} \g`

2. Write the expression using curly braces {} that will find texts containing at least 2 numbers side by side.
   
   `Release 10/9/2021`
   
   Ans: `\ [0-9]{4} \g`

# 
