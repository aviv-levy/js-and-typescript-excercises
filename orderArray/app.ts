let arr:number [] = [];

let order = ()=>{

    sortArr(arr);
    setcategory(arr);
}

let rndArr = ()=>{
    arr = [];
    for(let i=0; i<7; i++){
        arr.push(Math.floor(Math.random() * 101))
    }
    console.log('before order ' + arr);
}

let sortArr = (myarr:number[])=>{
    let i = 0;
    while (i<myarr.length){
        if(myarr[i+1]<myarr[i]){
            let ezer = myarr[i];
            myarr[i] = myarr[i+1];
            myarr[i+1] = ezer;
            i = 0;
        }
        else
          i++;
    }
        
        console.log('after order '+myarr);
}

let setcategory = (myarr:number[]):void =>{
    let small:number[] =[];
    let medium:number[] =[];
    let big:number[] =[];
    
    myarr.forEach(num => {
        if(num<=30)
            small.push(num);
        else if(num>30 && num<61)
            medium.push(num);
        else
            big.push(num);
    });

    console.log('small numbers: '+small);
    console.log('medium numbers: '+medium);
    console.log('big numbers: '+big);
    
}