
let prev_am;
            let amount;
            function expense() {        
                prev_am = parseFloat(document.getElementById('expense-amount').innerText);
                amount = parseFloat(document.getElementById('amount').value);
                document.getElementById('expense-amount').innerHTML = amount + prev_am + '$';
            }
        
            let inc_am;
            function incomeAmount() {
                inc_am = parseFloat(document.getElementById('income-amount').innerText);
                amount = parseFloat(document.getElementById('amount').value);
                document.getElementById('income-amount').innerHTML = amount + inc_am  + '$';
            }
            
            let inc;
            let exp;
            const checkStatus = () => {
                inc = parseFloat(document.getElementById('income-amount').innerText);
                exp = parseFloat(document.getElementById('expense-amount').innerText);
                document.getElementById('profit-amount').innerHTML = inc - exp + '$';
            }