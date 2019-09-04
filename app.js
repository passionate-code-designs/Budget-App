

// MONEY OUTPUT
// Replacing output values
 const output1=document.querySelector(".first h2");

 const output2=document.querySelector(".sec h2"  );

 const output3=document.querySelector(".three h2" );

 const btn=document.querySelector("#exp > button");


// expenses list output
 // const expenseName=document.querySelector(".list1");
  const expenseAmount=document.querySelector(".list2");



// CALCULATE BUTTON EVENT LISTENER
const calc= document.forms['cal'];
calc.addEventListener('submit',function(e){
   e.preventDefault();
   const value1 = calc.querySelector('input[type="number"]').value;
   output1.innerHTML=`SH ${value1}`;
   output3.innerHTML=`SH ${value1}`;

  // ADD EXPENSE EVENT LISTENER
  const addExp= document.forms['exp'];
  addExp.addEventListener('submit',function(e){
      e.preventDefault();
      const name1 = addExp.querySelector('input[type="text"]').value;
      const value2=parseInt(addExp.querySelector('input[type="number"]').value);


    //CREATING AN LI TO APPEND TO EXPENSE AMOUNT
      const li2 = document.createElement('li');
      const ul1=document.createElement('ul');
      const amount=document.createElement('span');
      const del=document.createElement('cite');

      amount.textContent =value2;
      del.textContent='DELETE';
      del.classList.add('delete')
      li2.textContent= name1;

       // li2.appendChild(del);      
       ul1.appendChild(li2);
       ul1.appendChild(amount);
       ul1.appendChild(del);

       expenseAmount.appendChild(ul1);

      btn.addEventListener('click',function(){
        var  total =0;
        $('.list2 ul span').each(function(){
           total+=parseInt($(this).html());
        });
         output2.innerText=`SH ${total}`;
         output3.innerHTML=`SH ${value1-total}`;
    
     });
     addExp.reset();
      
  });
     
     calc.reset();
});

//DELETE EVENT
const del2=document.querySelector('.list2');

del2.addEventListener('click',function(e){
  if(e.target.className=='delete'){
     const ul=e.target.parentElement;
     del2.removeChild(ul);
     console.log(e.target.parentElement)
  }
  
});



