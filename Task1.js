function validate(){
    var name=document.getElementById("name");
    var rollno=document.getElementById("roll");
    var date=document.getElementById("date");
    if(name=='')
    {
        alert("Enter Name");
        return false;
    }
    if(rollno=='')
    {
        alert("Enter Rollno");
        return false;
    }
    if(date=='')
    {
        alert("Enter date");
        return false;
    }
    if(name!=''&&rollno!=''&&date!='')
    {
        alert("Success");
        return true;
    }
}