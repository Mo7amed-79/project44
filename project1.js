let car = document.getElementById("car")
let skr = document.getElementById('skr')
let listen = document.getElementById('listen')
let hymn = document.getElementById('hymn')
let sana = document.getElementById('sana')
let sham3 = document.getElementById('sham3')
let fanelya = document.getElementById('fanelya')
let mlh = document.getElementById('mlh')
let foyl = document.getElementById('foyl')
let akyas = document.getElementById('akyas')
let steker = document.getElementById('steker')
let mrkz = document.getElementById('mrkz')
let mksrat = document.getElementById('mksrat')
let button = document.getElementById('button')
let total = document.getElementById('total')
let no3 = document.getElementById('no3')
let date = document.getElementById('date')

function gettotal()
{
    if(car.value !=''){
        let result = (+car.value + +skr.value + +listen.value + +hymn.value + +sana.value + +sham3.value + +fanelya.value + +mlh.value + +foyl.value + +akyas.value + +mksrat.value + +mrkz.value + +steker.value)
   total.innerHTML = result;
    }
} 

let datapro;
if(localStorage.product !=null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}

button.onclick =function(){
    let newpro = {
        النوع:no3.value,
        التاريخ:date.value,
        الطحينه:car.value,
        سكر:skr.value,
        ليثين:listen.value,
        هيمونه:hymn.value,
        سمنه:sana.value,
        شمع:sham3.value,
        فانيليا:fanelya.value,
        ملح:mlh.value,
        فويل:foyl.value,
        اكياس:akyas.value,
        ستيكر:steker.value,
        مركز:mrkz.value,
        مكسرات:mksrat.value,
        الاجمالي:total.innerHTML,

    }
    datapro.push(newpro);
    localStorage.setItem('product' , JSON.stringify(datapro)   );
    cleardata();
    showdata();
}
function cleardata(){
        no3.value='';
        date.value='';
        car.value='';
        skr.value='';
        listen.value='';
        hymn.value='';
        sana.value='';
        sham3.value='';
        fanelya.value='';
        mlh.value='';
        foyl.value='';
        akyas.value='';
        steker.value='';
        mrkz.value='';
        mksrat.value='';
        total.innerHTML='';
}

function showdata(){
    
    let table1='' ;
    
    for(let i =0; i < datapro.length; i++){
        table1 += `
        <tr>
        <td>${datapro[i].النوع}</td>
        <td>${datapro[i].التاريخ}</td>
        <td>${datapro[i].الطحينه}</td>
        <td>${datapro[i].سكر}</td>
        <td>${datapro[i].ليثين}</td>
        <td>${datapro[i].هيمونه}</td>
        <td>${datapro[i].سمنه}</td>
        <td>${datapro[i].شمع}</td>
        <td>${datapro[i].فانيليا}</td>
        <td>${datapro[i].ملح}</td>
        <td>${datapro[i].فويل}</td>
        <td>${datapro[i].اكياس}</td>
        <td>${datapro[i].ستيكر}</td>
        <td>${datapro[i].مركز}</td>
        <td>${datapro[i].مكسرات}</td>
        <td>${datapro[i].الاجمالي}</td>
        <td><button id="update">تعديل</button></td>
        <td><button onclick="deleteData(${i})" id="delete">مسح</button></td>
        </tr>
    `
    
}
 
document.getElementById('td').innerHTML=table1;


}



function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showdata()
}
showdata()