Animals – Web Page
(exercise one "EX1")
Authored by : Khaled idkeadik
ID : 207395153

============================================my exercise url =========================================================

http://khaledad.mysoft.jce.ac.il/ex1/

=============================================== last question in exercise (5)  ========================================
:שאלה 5 סעיף 1

 HTTP המנגנון שמשתמשין בו הוא  HTTP response שישלח אותה הלקוח לשרת ,ושרת יענה לו בהודעה  HTTP request  הודעה בצד הלקוח היא    

:שאלה 5 סעיף 2

 ##############   בקשה ראשונה  ##############

:לחיצה על  תמונה של חיה

Request URL: https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Chinese%20Crocodile%20Lizard/daily/20220306/20220313

GET שיטת בקשה : היא 

אורך תוכן: 464   

404  :מצב בקשה 
.זאות אומרת בקשה לא עוברת בהצלחה, ולא מוצא נתונים שביקשנו

application/problem+json סוג תוכן: הוא 
.עם שגיה Json זאות אומרת שקבלנו את הדאתה בסוג 


 ##############  בקשה שניה  ##############

:לחיצה על  תמונה של חיה אחר

Request URL: https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Lesser Kudu/daily/20220306/20220313


GET שיטת בקשה : היא 

אורך תוכן: 182  

200 :מצב בקשה 
.זאות אומרת בקשה עוברת בהצלחה, ומוצא נתונים שביקשנו

application/json סוג תוכן: הוא 
.Json זאות אומרת שקבלנו את הדאתה בסוג 


=======================================Description(my code doing)==================================

this web page Displays details about randomly selected animals from an external database by use Ajax, the page will Displays three button each button have diffrent number ( 4 , 8 , 10).
if the user click in button have number 4 the web will Displays 4 random pictures for animals with names, the same thing with button have number 8 and 10 if user click on it will displays,
8 random picture to animals with names if they click button have number 8 , 10 random pictures to animals with names if they click button have number 10.
if user click in pictures or names of animals will displays information about this animales, another click the information will disappear.

the are three ajax request:
1- to Displays random pictures for animals with names.
2- to Displays the date on rigth side of web.
3- to Displays the views of animals with information.

============================================functions:==========================================
ther are 2 functions:

1- change_date : this function find the date before 7 days and put it in string.
2- splite_date : this function get the date and put it in string. 
3- update_Date : this function convert date to american date.
==========================================Program Files========================================

1-index.html
2-animals.js
3-animals.css
4- README