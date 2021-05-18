var name_of_the_student_array = [];

function submit()
{
   var display_array_student = [];
   for(var j=1; j<=4;j++)
   {
       var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
       console.log(name_of_the_student);
       name_of_the_student_array.push(name_of_the_student);
   }

   console.log(name_of_the_student_array);

   var lenght_of_name_of_student_array=name_of_the_student_array.length;
   console.log(lenght_of_name_of_student_array);

   for(var i=0; i<lenght_of_name_of_student_array; i++)
   {
       display_array_student.push("<h4> NAME - "+name_of_the_student_array[i]+"</h4>");
       console.log(display_array_student);
   }

   document.getElementById("display_name_with_commas").innerHTML=display_array_student;
   
   var remove_commas=display_array_student.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;

   document.getElementById("submit_button").style.display="none";

   document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_array_student_sorting=[];

    var lenght_of_name_of_student_array=name_of_the_student_array.length;
   console.log(lenght_of_name_of_student_array);

   for(var i=0; i<lenght_of_name_of_student_array; i++)
   {
       display_array_student_sorting.push("<h4> NAME - "+name_of_the_student_array[i]+"</h4>");
       console.log(display_array_student_sorting);

   }

   var remove_commas=display_array_student_sorting.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}