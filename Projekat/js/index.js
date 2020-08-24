class Interface {
  constructor() {
    //top
    this.date = document.querySelector(".budget__title--month");
    this.budgetLbl = document.querySelector(".budget__value");
    this.incomeLbl = document.querySelector(".budget__income--value"); 
    this.expensesLbl = document.querySelector(".budget__expenses--value");
    this.expensesLblPercent = document.querySelector(".budget__expenses--percentage");
    this.feedb = document.querySelector(".feedback");
    //bottom

    this.incomeList = document.querySelector(".income__list");
    this.expensesList = document.querySelector(".expenses__list");
    this.addBtn = document.querySelector(".add__btn");
    this.type = document.querySelector(".add__type");
    this.descr = document.querySelector(".add__description");
    this.val = document.querySelector(".add__value");
    this.listCont = document.querySelector(".container");
    this.itemPerc = document.querySelector(".item__percentage");

    this.itemListInc = [];
    this.itemListExp = [];
    this.itemIDInc = 0;
    this.itemIDExp = 0;
    this.percentage = -1;
    this.Month();

  }



  calcPerc() {
    if (parseInt((+this.expensesLbl.innerHTML) * 100 / (+this.incomeLbl.innerHTML)) == 0) {
      this.expensesLblPercent.innerHTML = "<1%";
    }
    else {
      this.expensesLblPercent.innerHTML = parseInt((+this.expensesLbl.innerHTML) * 100 / (+this.incomeLbl.innerHTML)) + "%";
    }
  }

  Month() {
    var now, month, months, year;
    now = new Date();
    months = ["Januaru", "Februaru", "Martu", "Aprilu", "Maju", "Junu", "Julu", "Avgustu", "Septembru", "Oktobru", "Novembru", "Decembru"];
    month = now.getMonth();
    year = now.getFullYear();
    this.date.textContent = months[month] + " " + year;
  }

  UpdateBudget() {

    const des = this.descr.value;
    const vl = this.val.value;
    if (vl === '' || vl < 0 || des === '') {
      this.descr.value = ""; this.val.value = "";
      this.feedb.classList.remove('hideItem');
      this.feedb.classList.add('showItem');
      this.feedb.innerHTML = `<p>value cannot be empty or
      negative</p>`;
      const self = this;
      setTimeout(() => {
        self.feedb.classList.remove('showItem');
        self.feedb.classList.add('hideItem');
      }, 2000);
    }
    else {



      if (this.type.value === "inc") {
        let transact = {
          id: this.itemIDInc,
          amount: vl,
          description: des

        }
        this.descr.value = "";

        this.addToListIncome(transact);
        this.totalIncome();
        this.val.value = '';
      }

      else if (this.type.value === "exp") {
        let transact = {
          id: this.itemIDExp,
          amount: vl,
          description: des

        }
        this.descr.value = "";

        this.val.value = ''
        this.addToListExp(transact);
        this.totalExpenses();
      }



    }
    this.budgetLbl.textContent = this.totalIncome() - this.totalExpenses();
    this.calcPerc();
  }


  addToListIncome(transact) {
    this.itemIDInc++;
    this.itemListInc.push(transact);
    const div = document.createElement('div');
    div.classList.add('inc');
    div.innerHTML = `
    <div class="item clearfix" id="income-${this.itemIDInc}">
                            <div class="item__description">${transact.description}</div>
                            <div class="right clearfix">
                                <div class="item__value">${transact.amount}</div> 
                                <div class="item__delete">
                                    <button class="item__delete--btn inc"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>
    `;
    this.incomeList.appendChild(div);

  }



  addToListExp(transact) {
    this.itemIDExp++;
    this.itemListExp.push(transact);
    const div = document.createElement('div');
    let perc = parseInt((+transact.amount) * 100 / (+this.incomeLbl.innerHTML)) + "%";
    div.classList.add('exp');
    div.innerHTML = `
    <div class="item clearfix" id="expense-${this.itemIDExp}">
                            <div class="item__description">${transact.description}</div>
                            <div class="right clearfix">
                                <div class="item__value">${transact.amount}</div>
                                <div class="item__percentage">${perc}</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn exps"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>
    `;
    this.expensesList.appendChild(div);
  }

  totalIncome() {
    let total = 0;
    if (this.itemListInc.length > 0) {
      this.itemListInc.forEach(element => total = (parseInt(element.amount) + total));
    }
    this.incomeLbl.textContent = total;
    return total;
  }

  totalExpenses() {
    let total = 0;
    if (this.itemListExp.length > 0) {
      this.itemListExp.forEach(element => total = (parseInt(element.amount) + total));
    }
    this.expensesLbl.textContent = total;
    return total;
  }



  deleteInc(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement.parentElement;
    this.incomeList.removeChild(parent);

    let templList = this.itemListInc.filter(function (item) {
      return item.id !== id;
    });

    this.itemListInc = templList;


  }

  deleteExp(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement.parentElement;
    this.expensesList.removeChild(parent);
    let templList = this.itemListExp.filter(function (item) {
      return item.id !== id;
    });
    this.itemListExp = templList;




  }
  UpdateE(x) {
    var o = x.querySelector(".item__description").innerHTML;
    var x = x.querySelector(".item__value").innerHTML;
    for (var i = 0; i < this.itemListExp.length; i++) {
      if (this.itemListExp[i].amount == x && this.itemListExp[i].description == o) {
        this.itemListExp.splice(i, 1);
        break;
      }
    }
    this.totalIncome(); this.totalExpenses(); this.budgetLbl.textContent = this.totalIncome() - this.totalExpenses();
    this.calcPerc();
  }
  UpdateI(x) {
    var o = x.querySelector(".item__description").innerHTML;

    var x = x.querySelector(".item__value").innerHTML;

    for (var i = 0; i < this.itemListInc.length; i++) {
      if (this.itemListInc[i].amount == x && this.itemListInc[i].description == o) {
        this.itemListInc.splice(i, 1);
        break;
      }
    }
    this.totalIncome(); this.totalExpenses(); this.budgetLbl.textContent = this.totalIncome() - this.totalExpenses();
    this.calcPerc();
  }

}





function eventListeners() {
  const addItem = document.querySelector(".add__btn");
  const ListInc = document.querySelector(".income__list");
  const ListExp = document.querySelector(".expenses__list");


  const ui = new Interface();

  addItem.addEventListener("click", function (e) {
    e.preventDefault();
    ui.UpdateBudget();



  });
  ListInc.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.parentElement.classList.contains('item__delete--btn')) {
      ui.deleteInc(e.target.parentElement);
      ui.UpdateI(e.target.parentElement.parentElement.parentElement.parentElement);

    }
  });


  ListExp.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.parentElement.classList.contains('item__delete--btn')) {
      ui.deleteExp(e.target.parentElement);
      ui.UpdateE(e.target.parentElement.parentElement.parentElement.parentElement);
    }


  });
}


document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});

























