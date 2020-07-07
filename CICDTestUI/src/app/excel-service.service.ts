import { Injectable, OnInit } from '@angular/core';
import { TSMap } from "typescript-map"
import { isString } from 'util';
import {ErrorClass} from './error';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService{

  constructor() {
 }

  responseData:string[][]=[];
  file:JSON;
  flag_20_num:boolean = false;
  flag_21_num:boolean = false;
  map = new TSMap();
  err:string;
  //let errorArray:Errorclass[];
     errorArray = new Array<ErrorClass>();
  
  validation(file){

    type ErrorRows={
    rowSrNo:number,
    errors:ErrorClass[]
    }

   let errorRowsArray = new Array<ErrorRows>();

    let heads=['column0','column1','column2','column3','column4','column5','column6','column7','column8','column9','column10',
    'column11','column12','column13','column14','column15','column16','column17','column18','column19','column20',
  'column21','column22','column23','column24','column25','column26','column27','column28','column29','column30',
  'column31','column32','column33','column34','column35'];
      this.map.set('responseHeader',heads);
    // type Error ={
    //   errorColumn:string;
    //   errorMsg:string;
    //   errorRowId:number;
    // }
    console.log(this.map);

    
    for(var i = 1 ; i<file.length; i++){

        this.errorArray = new Array<ErrorClass>();

      for(var j = 0 ; j<file[i].length; j++){

        //FIRST PART ----------------------------------------------------------------------

        if(j==0)
        {
          //console.log(file[i][j]+' '+this.isSrno(file[i][j]));
          this.isSrno(file[i][j],j);
        }

        else if(j==1)
        {
          //console.log(file[i][j]+' '+this.isDistrict(file[i][j]));
          this.isDistrict(file[i][j],j);
        }

        else if(j==2)
        {
          //console.log(file[i][j]+' '+this.isName(file[i][j]));
          this.isName(file[i][j],j);
        }

        else if(j==3)
        {
          //console.log(file[i][j]+' '+this.isAge(file[i][j]));
          this.isAge(file[i][j],j);
        }

        else if(j==4){
          //console.log(file[i][j]+' '+this.isGender(file[i][j]));
          this.isGender(file[i][j],j);
        }

        else if(j==5){
          //console.log(file[i][j]+' '+this.isAddress(file[i][j]));
          this.isAddress(file[i][j],j);
            
        }

        else if(j==6){
          //console.log(file[i][j]+' '+this.isWard(file[i][j]));
          this.isWard(file[i][j],j);
        }

        else if(j==7){
          //console.log(file[i][j]+' '+this.isZone(file[i][j]));
          this.isZone(file[i][j],j);
        }

        else if(j==8)
        {
          //console.log(file[i][j]+' '+this.isPhnno(file[i][j]));
          this.isPhnno(file[i][j],j);
        }
        
        else if(j==9){
          //console.log(file[i][j]+' '+this.isTraceable(file[i][j]));
          this.isTraceable(file[i][j],j)
        }
        
        
            
        //SECOND PART -------------------------------------------------------------------------------

        if(j == 12)
        {
          //console.log("J = "+j+" " +file[0][j]+this.isHospitalName(file[i][j]));
          this.isHospitalName(file[i][j],j);
        }

        if(j == 13)
        {
          //console.log("J = "+j+" " +file[0][j]+this.isSampleStatus(file[i][j]));
          this.isSampleStatus(file[i][j],j);
        }

   
        if(j==10)
        {
          //console.log(file[i][j])
         
          this.isMandatoryDate(file[i][j],j);
            
          
        }
        if(j==11||j==14||j==23||j==24||j==27||j==28||j==33||j==34){
 
          this.isNotMandatoryDate(file[i][j],j);
          
        }
        if(j == 15)
        {
          //console.log("J = "+j+" " +file[0][j]+this.isStatus(file[i][j]));
          this.isStatus(file[i][j],j);
      }
       
  
        if(j == 17)
        {
          //console.log(file[0][j]+" "+this.isCurrentStatus(file[i][j]));
          this.isCurrentStatus(file[i][j],j) ; 
            
        }
            
        if(j == 18)
        {
          //console.log(file[0][j]+" "+this.isHospitalizedStatus(file[i][j]));
          this.isHospitalizedStatus(file[i][j],j);
           
        }
          
        if(j == 19)
        {
          //console.log(file[0][j]+" "+this.ifMigrated(file[i][j]));
          this.ifMigrated(file[i][j],j);
            
        }
          
        if(j == 20 )
        {
          //console.log(file[0][j]+" "+this.migrationStatus(file[i][j]));
          //&& this.flag_20_num === true
          this.migrationStatus(file[i][j],j);
           
        }
        if(j == 21 )
        {
          
          this.otherState(file[i][j],j);
            
        }

       

    //     // THIRD PART -----------------------------------------------------------------------------------


        if(j===25 || j=== 29)
        {
          //console.log(file[i][j]+' '+this.isStatus(file[i][j]))
          //this.isNotMandatoryStatus(file[i][j],j);
          this.isStatus(file[i][j],j);
        }

        if(j===35)
        {
          //console.log(file[i][j]+' '+this.isSourceOfInfo(file[i][j]));
          this.isSourceOfInfo(file[i][j],j);
            
        }

        if(j===26||j===30)
        { 
          // console.log(file[i][j]+' '+this.isNumber(file[i][j]));
          this.isNIVNumber(file[i][j],j);
            
        }
      
        
        if(j===32)
        {
          //console.log(file[i][j]+' '+this.isCountry(file[i][j]));
          this.isCountry(file[i][j],j);
           
        }   
        // if(this.errorArray.length > 0)
        // {
        
      
      }
      if(this.errorArray.length > 0)
        {
      let errorrowsobj:ErrorRows={
        rowSrNo:i,
        errors:this.errorArray
      }
      errorRowsArray.push(errorrowsobj);
    }
    }
    this.map.set('errorRows',errorRowsArray);
    console.log(JSON.stringify(this.map.toJSON()));
    return this.map.toJSON();
  }


    
  // **********************************************************************
// |||||||||||||||||||||||VALIDATION METHODS|||||||||||||||||||||||||||||
// **********************************************************************

isNIVNumber(num,j:number){
  let flag=false;
  if(typeof num === typeof ""){
    if(num.trim()==""){
      return;
    }
  }
  if(num===undefined||((typeof num === typeof 1) && num>0 &&  ((num - Math.floor(num)) === 0))){
   return;
  }
  this.err = "Not a NIV number";
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;

}

isMandatory(value){

    if(value===undefined||value===null||(this.isString(value)===true&&(value.trim()===""||value.toLowerCase().trim()=="null")))
    return true;
}

isSrno(num,j:number){
  if(this.isMandatory(num)==true)
  {
    this.err="Mandatory column cannot be empty";
    
  }
  else if(this.isNumber(num)==false)
  {
    this.err="Sr No should be an integer"
    
  }
  else if(num<1)
  {
    this.err="Sr No cannot be less than 1";
    
  }
  else if(this.isNumber(num)==true && num>=1)
    return ;
  else{
    this.err="Invalid Sr No";
  
  }  
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isDistrict(district,j:number){
  if(this.isMandatory(district)==true)
  {
    this.err="Mandatory column cannot be empty";
    
  }
  else if(this.isNumber(district)==true){
    this.err="District cannot have numbers";
    
  }
  else if(this.isString(district)==false){
    this.err="District cannot have special characters or numbers";
    
  }
  else if(district.toLowerCase().trim()!="pune")
  {
    this.err="District should be pune";
    
  }
  else if(district.toLowerCase().trim()=="pune")
    return ;
  else
  {
    this.err="Invalid District";
    
  }
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isName(name,j:number){
  if(this.isMandatory(name)==true)
  {
    this.err="Mandatory column cannot be empty";
   
  }
  else if(this.isNumber(name)==true){
    this.err="Name cannot have numbers";
   
  }
  else if(this.isString(name)==false){
    this.err="Name cannot have special characters or numbers";
    
  }
  else if(this.isString(name)==true && name.trim().length>=3)
    return ;
  else
  {
    this.err="Invalid Name";
  }

  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isAge(age,j:number){
  if(this.isMandatory(age)==true)
  {
    this.err="Mandatory column cannot be empty";
  }  
  else if(this.isNumber(age)==false)
  {
    this.err="Age should be an integer"
   
  }
  else if(age<0)
  {
    this.err="Age cannot be negative";
    
  }
  else if(((age - Math.floor(age)) !== 0)){
    this.err="Age cannot be decimal value";
   
  }
  else if(age>110)
  {
    this.err="Age cannot be greater than 110";
    return false;
  }
  else if(this.isNumber(age)==true && age>=0 && age<=110)
    return ;
  else{
    this.err="Invalid Sr No";
   
  }  
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isGender(gender,j:number){
  let values:string[];
  values=['male','female','intersex','ftm male','mtf female','m','f','mtf','ftm'];
  if(this.isMandatory(gender)==true)
  {
    this.err="Mandatory column cannot be empty";
    
  }
  else if(this.isNumber(gender)==true)
  {
    this.err="Gender cannot have numbers"
    
  }
  else if(this.isString(gender)==false)
  {
    this.err="Gender cannot have special charaters or numbers"
   
  }
  else if(values.includes(gender.replace(/\s+/g, " ").toLowerCase().trim()))
    return ;
  else{
    this.err="Invalid gender";
    
  } 
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isAddress(addr,j:number){
   
  if(this.isMandatory(addr)==true)
  {
    this.err="Mandatory column cannot be empty";
    let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
    
  }
  else{
    return ;
  }
}

isWard(ward,j:number){
  let values:string[];
  values=["aundh - baner","bhawani peth","bibwewadi","dhankawadi - sahakarnagar","dhole patil road","hadapsar - mundhwa","kasba - vishrambaugwada","Kondhwa - Yewalewadi",
          "Kothrud - Bawdhan","Nagar Road - Vadgaonsheri","Shivajinagar - Gholeroad","Sinhgad Road","Wanawadi - Ramtekadi","Warje - Karvenagar",
          "Yerawada - Kalas - Dhanori","Incorrect/Incomplete Address","Address Not Available","Out of PMC"];
  if(ward==null||(this.isString(ward)==true&&ward.trim()==""))
    return ; 
  else if(this.isNumber(ward)==true)
  {
    this.err="Ward cannot have numbers";
  }
  else if(values.includes(ward.toLowerCase()))
      return;
  else
  {
    this.err="Invalid Ward";
    
  }
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isZone(zone,j:number){
  if(this.isNumber(zone)==true){
    this.err="Zone cannot have numbers";
   
  }
  else if(this.isString(zone)==false){
    this.err="Zone cannot have special characters or numbers";
    
  }
  else if(this.isString(zone)==true)
    return ;
  else
  {
    this.err="Invalid Zone";
    
  }
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isPhnno(phn,j:number){
  var phn1=phn+"";
  var letters = /^(\+91-|\+91|\91|0)?\d{10}$/;
  if(this.isMandatory(phn)==true)
  {
    this.err="Mandatory column cannot be empty";
    
  }
  else if(this.isString(phn))
  {
    this.err="Contact No. cannot have alphabets";
   
  }
  else if(this.isString(phn)==false && this.isNumber(phn)==false)
  {
    this.err="Contact No. cannot have special characters";
  
  }
  else if(phn1.match(letters))
    return ;
  else
  {
    this.err="Invalid Contact No.";
   
  }
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

isTraceable(trace,j:number){

  let values:string[];
  values = ['yes','no'];

  if(trace==null||(this.isString(trace)==true&&trace.trim()==""))
    return; 

  else if(this.isNumber(trace)== true)
  {
    this.err = "Trace value cannot have numbers";
  
  }
  else if(this.isString(trace) == false)
  {
    this.err = "Trace value cannot have special characters and numbers";
   
  }
  else if(this.isString(trace)&&trace.trim().indexOf(" ") != -1)
  {
    this.err = "Trace value cannot contain spaces";
  
  }
  else if(values.includes(trace.toLowerCase().trim()))
    return ;
  else
  {
    this.err = "Trace value is invalid !";
   
  }
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;
}

  isDate(_date){
    // const _regExp  = new RegExp('^(([0-9])|([0-2][0-9])|([3][0-1]))\-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\-\d{4}$');
    // return _regExp.test(_date);
    let flag=false;
    console.log(this.ExcelDateToJSDate(_date));
    if(this.isNumber(_date)){
      if(this.ExcelDateToJSDate(_date).getFullYear()>=this.ExcelDateToJSDate(43831).getFullYear()){
        flag=true;
      }
    }
    return flag;
    }

    isSampleStatus(sample,j:number)
    {
      let values:string[];
      values = ['yes','no'];
      
      //var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
        if(sample ==null ||isString(sample) && sample.trim() == "")
        return true;
       
          
           if(this.isNumber(sample)== true)
          {
            this.err = "Sample Collection value cannot have numbers";
            
          }
          else if(this.isString(sample) == false)
          {
            this.err = "Sample Collection value cannot have special characters and numbers";
            
          }
          else if(values.includes(sample.toLowerCase().trim()))
          return ;
          else if(sample.trim().indexOf(" ") != -1)
          {
            //alert(sample.trim().indexOf(" "));
            this.err = "Sample collection value cannot contain spaces";
            
          }
          else
          {
            this.err = "Sample Collection value is invalid !";
           
          }
          
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
    }
  
    isHospitalizedStatus(statusval,j:number)
    {
      let values:string[];
      values = ['admitted','discharge','death'];
  
      if(statusval ==null ||isString(statusval) && statusval.trim() == "")
        return;
       
          
           if(this.isNumber(statusval)== true)
          {
            this.err = "Hospitalized status cannot be a number";
            
          }
          else if(this.isString(statusval) == false)
          {
            this.err = "Hospitalized status cannot contain special characters or numbers";
            
          }
          else if(values.includes(statusval.toLowerCase().trim()))
          return ;
          else if(statusval.trim().indexOf(' ') != -1)
          {
            this.err = "Hospitalized status cannot contain spaces";
          
          }
          else
          {
            this.err = "Hospitalized status is invalid !";
           
          }
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
  
    }
    // isNotMandatoryStatus(resstatus,j){
    //   //console.log("In func value "+status);
    //   let values:string[];
    //   values=['awaiting','positive','negative'];
  
    //   if(this.isMandatory(resstatus)==true)
    //   {
    //     // this.err="Mandatory column cannot be empty";
    //     return true;
    //   }
    //   else if(this.isNumber(resstatus)==true){
    //     this.err="Sample Result cannot be a number";
    //     return false;
    //   }
    //   else if(this.isString(resstatus)==false){
    //     this.err="Sample Result cannot contain special characters or numbers";
    //     return false;
    //   }
    //   else if(values.includes(resstatus.toLowerCase().trim()))
    //       return true;
  
      
    //       else
    //       {
    //         this.err = "Sample Result is invalid !";
    //         return false;
    //       }
    // }
    isHospitalName(hosname,j:number)
    {
     var letters = /^[a-zA-Z0-9\s]+$/ ;

    if(hosname ==null || isString(hosname) && hosname.trim() == "")
      return ;

    else if(this.isNumber(hosname))
      return ;
    else if(!hosname.match(letters))
     {
      this.err = "Hospital name cannot contain special characters";
      let errorobj = new ErrorClass('column'+j,this.err) ;
      this.errorArray.push(errorobj);
      return;
    
     }
     else
         
      return;
    
 }
      
    
  
    otherState(stateval,j:number)
    {
      
      let values:string[];
      values = [
        'andhra pradesh','arunachal pradesh','assam','bihar','chattisgarh','goa','gujarat','haryana','himachal pradesh'
       ,'jammu and kashmir', 'jharkhand','karnataka','kerala','madhya pradesh', 'maharastra','manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha',
        'punjab', 'rajasthan', 'sikkim','tamil nadu', 'telangana', 'tripura' ,'uttar pradesh', 'uttarkhand','west bengal','hp','mp','up','j&k'];
      
        
        if(stateval == null ||isString(stateval) && stateval.trim() == "")
        return ;
       
        //console.log(this.isString(stateval));
          else if(this.isNumber(stateval)== true)
          {
            this.err = "State can't be a number";
           
          }
          
          else if(values.includes(stateval.toLowerCase().trim()))
          return ;
  
          else if(this.isString(stateval) == false)
          {
            this.err = "State cannot have special characters or numbers";
           
          }
         
          
          else
          {
            this.err = "State value is invalid !";
            
          }
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
  
    }
  
  
    ifMigrated(migrationval,j:number)
    {
      let values:string[];
      values = ['under surveillance','migrated','surveillance-completed'];
  
      //console.log("flag 20 "+this.flag_20_num);
      
      
        // if(status.toLowerCase().localeCompare("migrated"))
        // this.flag_20_num = true;
  
        if(migrationval == null ||isString(migrationval) && migrationval.trim() == "")
        return;
       
          
           if(this.isNumber(migrationval)== true)
          {
            this.err = "Hospitalized status cannot be a number";
           
          }
          else if(this.isString(migrationval) == false)
          {
            this.err = "Hospitalized status cannot contain special characters or numbers";
          
          }
          else if(values.includes(migrationval.toLowerCase().trim()))
          return ;
          
          else
          {
            this.err = "Hospitalized status is invalid !";
           
          }
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
    }
  
    isString(str){
      var str1=str+"";
      var letters = /^[A-Za-z ]+$/;
      if(str1.match(letters))
        return true;
     else
       return false;
    }
    
    labStatus(labstatus,j:number)
    {
      let values:string[];
      values = ['ag diagnostics','bj gmc','genepath','jyot','metropolis','niv pune','outside lab','private lab','religare lab','sahyadri lab','sasoon','srl','suburban diagnostics','thyrocare'];
      
      if(this.isMandatory(labstatus)==true)
      {
        this.err="Mandatory column cannot be empty";
      
      }
      else if(this.isNumber(labstatus)==true){
        this.err="Lab Name can't be a number";
      
      }
      else if(this.isString(labstatus)==false){
        this.err="Lab Name cannot contain special characters or numbers";
      
      }
      else if(this.isString(labstatus) == true)
      {
        for(var i in values)
        {
          var str = values[i] ;
  
              if(str.startsWith(labstatus.toLowerCase().trim()))
              return ;
  
        }
        
          this.err = "Lab does not exist"
       
      }
      else
          {
            this.err = "Lab Name is invalid !";
         }
      
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
    }
  
    migrationStatus(migrationval,j:number)
    {
      let values:string[];
      values = ['out of india','other state'];

      if(migrationval == null ||isString(migrationval) && migrationval.trim() == "")
        return true;
       
          
           if(this.isNumber(migrationval)== true)
          {
            this.err = "Migration status can't be a number";
          
          }
          else if(this.isString(migrationval) == false)
          {
            this.err = "Migration status cannot contain special characters or numbers";
          
          }
          else if(values.includes(migrationval.toLowerCase().trim()))
          return ;
          
          else
          {
            this.err = "Migration status is invalid !";
          
          }
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
    }
  
    isCurrentStatus(currstatus,j:number)
    {
      let values:string[];
      values = ['stable','critical','on ventilator','death'];
  
      if(this.isMandatory(currstatus)==true)
      {
        this.err="Mandatory column cannot be empty";
     
      }
      else if(this.isNumber(currstatus)==true){
        this.err="Current status cannot be a number";
        
      }
      else if(this.isString(currstatus)==false){
        this.err="Current status cannot contain special characters or numbers";
      
      }
      else if(values.includes(currstatus.toLowerCase().trim()))
          return;
  
      
          else
          {
            this.err = "Current status is invalid !";
            
          }
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
    }
  
    isStatus(resstatus,j:number){
      //console.log("In func value "+status);
      let values:string[];
      values=['awaiting','positive','negative'];
  
      if(this.isMandatory(resstatus)==true)
      {
        this.err="Mandatory column cannot be empty";
       
      }
      else if(this.isNumber(resstatus)==true){
        this.err="Sample Result cannot be a number";
      
      }
      else if(this.isString(resstatus)==false){
        this.err="Sample Result cannot contain special characters or numbers";
      
      }
      else if(values.includes(resstatus.toLowerCase().trim()))
          return;
  
      
          else
          {
            this.err = "Sample Result is invalid !";
           
          }
          let errorobj = new ErrorClass('column'+j,this.err) ;
          this.errorArray.push(errorobj);
          return;
    }
  
  
  isNumber(num){
    return !isNaN(num);
  }

 

  isSourceOfInfo(info,j:number){
    let values:string[];
    values=['APHO','BOI','MHA','SELF REPORTING','HOSPITAL','CONTACT TRACING','OTHERS'];
    if(info===undefined){
      return true;
    }
    else if(typeof info === typeof 1){
      this.err='Source of info cannot be a number'
    }
    else if(typeof info === typeof ""){
      if(info.trim()==""){
        return;
      }
     else if(values.includes(info.toUpperCase())){
        return ;
      }
      else{
        this.err = "Source Of info Invalid";
        let errorobj = new ErrorClass('column'+j,this.err) ;
        this.errorArray.push(errorobj);
        return;
        
      }
    }
    
  }

  isCountry(country,j:number){
    
    var flag = false;
    console.log(country)
if(country === undefined){
  return;
}

 else   if(typeof country === typeof 'string'){
   if(country.trim()==""){
     return;
   }else{
    let countries:string[];
    countries=["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British lndian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"];
    for(var c =0;c<countries.length ; c++){
      if(countries[c].toUpperCase()===country.toUpperCase()){
        return;
      }
    }
  }
  }
  this.err = "Not valid country";
  let errorobj = new ErrorClass('column'+j,this.err) ;
  this.errorArray.push(errorobj);
  return;

  }

   ExcelDateToJSDate(date) {
    var utc_days  = Math.floor(date - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
 
    var fractional_day = date - Math.floor(date) + 0.0000001;
 
    var total_seconds = Math.floor(86400 * fractional_day);
 
    var seconds = total_seconds % 60;
 
    total_seconds -= seconds;
 
    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
 
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate());
  }

  isMandatoryDate(date,j:number){
    let flag=false;
    console.log(date);

    if(this.isMandatory(date)===true){
      this.err='date cannot be empty mandatory'
    }else{
     if(typeof date === typeof 1){
       this.err='Date cannot be a number '
     }
    if(typeof date === typeof ""){
      var regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
      console.log("Regular expression for dates : "+date.match(regex))

      if(date.trim().match(regex)){
        return;
      }
      else if(!date.includes('-','/','.','1','2','3','4','5','6','7','8','9','0')){
        this.err="Date cannot be string"
      }
      else{
        this.err="Invalid date format (dd.mm.yyyy)(dd-mm-yyyy)(dd/mm/yyyy)"
      }
    }
    }
    let errorobj = new ErrorClass('column'+j,this.err) ;
    this.errorArray.push(errorobj);
    return;
  }

  isNotMandatoryDate(date,j:number){
    let flag=true;
    console.log(date);

    if(date===undefined){
  return ;
    }
    else{
     if(typeof date === typeof 1){
       this.err='Date cannot be a number'
       
     }
    if(typeof date === typeof ""){
      var regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
      console.log("Regular expression for dates : "+date.match(regex))
      if(date.trim().match(regex)||date.trim()==""){
        return;
      }
      else if(!date.includes('-','/','.','1','2','3','4','5','6','7','8','9','0')){
        this.err="Date cannot be string"
       
      }
      else{
        
        this.err="Invalid date format (dd.mm.yyyy)(dd-mm-yyyy)(dd/mm/yyyy)"
      }
    }
    }
    let errorobj = new ErrorClass('column'+j,this.err) ;
    this.errorArray.push(errorobj);
    return;
  
  }

  // generateJSONResponse(file){
  
  // let arrayResponse;
  // arrayResponse=[{Field:'headers',Value:file[0]}];
   

  // let obj = {};
  // arrayResponse.forEach(item => obj[item.Field] = item.Value);

  // // #2 Converting the object to JSON...
  // let json = JSON.stringify(obj);


 validateAdvanced(file){
  let heads=['Srno','District','Name','Age','Gender','Address','Ward','Zone','Phnno','Traceable','MandatoryDate',
  'NotMandatoryDate','HospitalName','SampleStatus','NotMandatoryDate','Status','LabStatus','CurrentStatus','HospitalizedStatus','IfMigrated','MigrationStatus',
'OtherState','column22','NotMandatoryDate','NotMandatoryDate','Status','NIVNumber','NotMandatoryDate','NotMandatoryDate','Status','NIVNumber',
'column31','Country','NotMandatoryDate','NotMandatoryDate','SourceOfInfo'];
for(var i =1;i<2;i++){
for(let name of heads){
  let j=heads.indexOf(name);
  let arg=file[i][j];
//   let n=name;
// window["is"+"srno"]();
eval("is"+name+"(arg,j)")

}
 }
 
  }



  }
  ////////////////////////////////////////////////////////////////////////////////////////





  
  
  function issrno(a,b){
    alert(a+" "+b);
  }