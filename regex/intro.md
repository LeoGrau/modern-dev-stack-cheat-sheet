# Regex Intro

### Most Simple Characters

| Character     | Description                                                                                                                                                                                                                                                                             | Use            | Admitted Samples                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------- |
| `.`           | The period `.` allows selecting any character, including special characters and spaces. Type a period . in the Regex field to proceed.                                                                                                                                                  | `/./g`         | ALL                                 |
| `[]`          | If one of the characters in a word can be various characters, we write it in square brackets `[]` with all alternative characters. For example, to write an expression that can find all the words in the text, type the characters `a,e,i,o,u` adjacently within square brackets `[]`. | `/b[aeiou]r/g` | bar<br/>ber<br/>bir<br/>bor<br/>bur |
| `^`           | To find all words in the text below, except for ber and bor, type e and o side by side after the caret `^` character inside square brackets `[]`.                                                                                                                                       | `/b[^eo]r/g`   | bar<br/>bir<br/>bur                 |
| `-` (letters) | To find the letters in the specified range, the starting letter and the ending letter are written in square brackets `[]` with a dash between them `-`. It is case-sensitive. Type the expression that will select all lowercase letters between e and o, including themselves.         | /[e-o]/g       | efghijklmno                         |
| `-` (numbers) | To find the numbers in the specified range, the starting number and the ending number are written in square brackets [] with a dash - between them. Write an expression that will select all numbers between 3 and 6, including themselves.                                             | /[3-6]/g       | 3456                                |

### Exercises

1. Write down the expression that will match anything other than the words beor and beur in the text. Do this using the negated character set.
   
   Ans: `\ be[^ou]r \g`

2. Write the expression that will select the letters from g to k in the text.  
   g and k letters should also be included in this range.
   
   Ans: `\ [g-k] \g`

3. Type an expression to select numbers from 2 to 7 in the text.  
   2 and 7 should also be included in this range.
   
   Ans: `\ [2-7] \g`

4. Write the phrase that matches each word in the text. The only characters that change are the initials of the words. beer, deer, feer
   
   Ans [bdf]eer
