const validateSubject = (subject) => subject.length > 8;

const convertToPersianNum = ({number}) => {
    var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    var persianMap = persianDigits.split("");
    let strNumber = '' + number

    return strNumber.replace(/\d/g,function(m){
        return persianMap[parseInt(m)];
    });
}
  
export { validateSubject, convertToPersianNum };
