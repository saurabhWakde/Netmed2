var arr=[{
    image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678694078_Dr._Willmar_Schwabe_Mini_banner_web.jpg"
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1676975578_Dr_Morepen__mini_web.jpg"
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681411498_Main_Mini-banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1676975578_Dr_Morepen__mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1670563832_Nutriog_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681801389_Groviva_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1668781285_Netmeds-436x224pxl.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681821316_Baby_Organo__mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1677567964_Acuvue_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681801100_R-for-rabbit_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1672723539_Gizmoswala_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1675162224_Ambitech_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1673939151_Omnigel_Mini-banner-web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681800740_Cipzer_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678775027_Gynoveda_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1679987715_SBL_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678186829_MOODS_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681800795_Reckeweg_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681801389_Groviva_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681800460_Satthwa_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1675162224_Ambitech_Mini_banner_web.jpg",
   },{
       image:"https://www.netmeds.com/images/product-v1/150x150/996968/fast_up_whey_essentials_premium_whey_blend_powder_rich_chocolate_480_gm_0_0.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678775027_Gynoveda_mini_web.jpg",
   }
    ]
var temp=1;
setInterval(function()
{
    document.getElementById('radio'+temp).checked=true;
    temp++;
    if(temp>4)
    {
        temp=1;
    }
},4000);
var temp1=1;
setInterval(function()
{
    document.getElementById('Tradio'+temp1).checked=true;
    temp1++;
    if(temp1>4)
    {
        temp1=1;
    }
},2000);
var temp2=1;
setInterval(function()
{
    document.getElementById('Nradio'+temp2).checked=true;
    temp2++;
    if(temp2>4)
    {
        temp2=1;
    }
},3000);
console.log(arr.length);
console.log(arr.length);

// Set the date and time for April 24th, 2023
const endTime = new Date('2023-04-25T00:00:00Z');

function updateRemainingTime() {
  // Calculate the time remaining in milliseconds
  const remainingTime = endTime.getTime() - new Date().getTime();

  // Convert the remaining time to days, hours, minutes, and seconds
  const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
  // Display the remaining time on the webpage
  const remainingTimeElement = document.getElementById('Time');
  remainingTimeElement.innerHTML = `${remainingHours}h&nbsp;${remainingMinutes}m&nbsp;${remainingSeconds}s &nbsp;remainning`;
}

// Call the updateRemainingTime function every second to update the remaining time
setInterval(updateRemainingTime, 1000);



// Call the updateRemainingTime function every second to update the remaining time
setInterval(updateRemainingTime, 1000);


// Call the updateRemainingTime function every second to update the remaining time
setInterval(updateRemainingTime, 1000);

arr.map(function(Elem, Index) {
    var div = document.createElement("div");
    var slides = document.createElement("div");
    var slider = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", Elem.image);
    div.append(image);
    slides.append(div);
    slider.append(slides);
    document.getElementsByClassName("Tslides")[0].append(slider);
});
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const images = document.querySelector('.carousel').children;
// const totalImages = images.length;
// let index = 0;

// prev.addEventListener('click', () => {
//   nextImage('next');
// })

// next.addEventListener('click', () => {
//   nextImage('prev');
// })

// function nextImage(direction) {
//   if(direction == 'next') {
//     index++;
//     if(index == totalImages) {
//       index = 0;
//     }
//   } else {
//     if(index == 0) {
//       index = totalImages - 1;
//     } else {
//       index--;
//     }
//   }

//   for(let i = 0; i < images.length; i++) {
//     images[i].classList.remove('main');
//   }
//   images[index].classList.add('main');
// }
const Cslider = document.querySelector('.Cslider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const CslideWidth = document.querySelector('.Cslide').clientWidth;
let CslideIndex = 0;

prevBtn.addEventListener('click', () => {
  CslideIndex--;
  if (CslideIndex < 0) {
    CslideIndex = Cslider.children.length - 1;
  }
  Cslider.style.transform = `translateX(-${CslideIndex * CslideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  CslideIndex++;
  if (CslideIndex >= Cslider.children.length) {
    CslideIndex = 0;
  }
  Cslider.style.transform = `translateX(-${CslideIndex * CslideWidth}px)`;
});
//Homeopathy



// slider sup
const Supslider = document.querySelector('.Supslider');
const SupprevBtn = document.querySelector('.Supprev-btn');
const SupnextBtn = document.querySelector('.Supnext-btn');
const SupslideWidth = document.querySelector('.Supslide').clientWidth;
let SupslideIndex = 0;

SupprevBtn.addEventListener('click', () => {
  SupslideIndex--;
  if (SupslideIndex < 0) {
    SupslideIndex = Supslider.children.length - 1;
  }
  Supslider.style.transform = `translateX(-${SupslideIndex * SupslideWidth}px)`;
});

SupnextBtn.addEventListener('click', () => {
  SupslideIndex++;
  if (SupslideIndex >= Supslider.children.length) {
    SupslideIndex = 0;
  }
  Supslider.style.transform = `translateX(-${SupslideIndex * SupslideWidth}px)`;
});




const Hslider = document.querySelector('.Hslider');
const HprevBtn = document.querySelector('.Hprev-btn');
const HnextBtn = document.querySelector('.Hnext-btn');
const HslideWidth = document.querySelector('.Hslide').clientWidth;
let HslideIndex = 0;

HprevBtn.addEventListener('click', () => {
  HslideIndex--;
  if (HslideIndex < 0) {
    HslideIndex = Hslider.children.length - 1;
  }
  Hslider.style.transform = `translateX(-${HslideIndex*HslideWidth}px)`;
});

HnextBtn.addEventListener('click', () => {
  HslideIndex++;
  if (HslideIndex >= Hslider.children.length) {
    HslideIndex = 0;
  }
  Hslider.style.transform = `translateX(-${HslideIndex * HslideWidth}px)`;
});
//bestseller
const Bestslider = document.querySelector('.Bestslider');
const BestprevBtn = document.querySelector('.Bestprev-btn');
const BestnextBtn = document.querySelector('.Bestnext-btn');
const BestslideWidth = document.querySelector('.Bestslide').clientWidth;
let BestslideIndex = 0;

BestprevBtn.addEventListener('click', () => {
  BestslideIndex--;
  if (BestslideIndex < 0) {
    BestslideIndex = Bestslider.children.length - 1;
  }
  Bestslider.style.transform = `translateX(-${BestslideIndex*BestslideWidth}px)`;
});

BestnextBtn.addEventListener('click', () => {
  BestslideIndex++;
  if (BestslideIndex >= Bestslider.children.length) {
    BestslideIndex = 0;
  }
  Bestslider.style.transform = `translateX(-${BestslideIndex * BestslideWidth}px)`;
});
/////Brand in focus slider
const Brandslider = document.querySelector('.Brandslider');
const BrandprevBtn = document.querySelector('.Brandprev-btn');
const BrandnextBtn = document.querySelector('.Brandnext-btn');
const BrandslideWidth = document.querySelector('.Brandslide').clientWidth;
let BrandslideIndex = 0;

BrandprevBtn.addEventListener('click', () => {
  BrandslideIndex--;
  if (BrandslideIndex < 0) {
    BrandslideIndex = Brandslider.children.length - 1;
  }
  Brandslider.style.transform = `translateX(-${BrandslideIndex*BrandslideWidth}px)`;
});

BrandnextBtn.addEventListener('click', () => {
  BrandslideIndex++;
  if (BrandslideIndex >= Brandslider.children.length) {
    BrandslideIndex = 0;
  }
  Brandslider.style.transform = `translateX(-${BrandslideIndex * BrandslideWidth}px)`;
});


// var Productarr=[{
//   image_url:"https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
//   ProductName:"Dabur",
//   Price:599,
//   MRP:800,
//   OFF:"60%off"
// },
// {
//   image_url:"https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
//   ProductName:"Dabur",
//   Price:599,
//   MRP:800,
//   OFF:"60%off"
// },{
//   image_url:"https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
//   ProductName:"Dabur",
//   Price:599,
//   MRP:800,
//   OFF:"60%off"
// },
// {
//   image_url:"https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
//   ProductName:"Dabur",
//   Price:599,
//   MRP:800,
//   OFF:"60%off"
// }
// ,{
//   image_url:"https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
//   ProductName:"Dabur",
//   Price:599,
//   MRP:800,
//   OFF:"60%off"
// }]

// var arr = JSON.parse(localStorage.getItem("cartItems")) || [];

// var buttons = document.querySelectorAll("button");
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     var obj = {
//       image_url: this.parentElement.querySelector("#supimg").getAttribute("src"),
//       Name: this.parentElement.querySelector("#supname").textContent,
//       Price: this.parentElement.querySelector("#supprice").textContent,
//       MRP: this.parentElement.querySelector("#supmrp").textContent,
//       Off: this.parentElement.querySelector("#supoff").textContent,
//       quantity: 1
//     }
//     buttons[i].textContent="Added To Cart"
//     var found = arr.find(item => item.Name === obj.Name);
//     if (found) {
//       found.quantity++;
//       console.log("Added to cart: ", found)
//        this.textContent = "Added To Cart";
//     } else {
//       arr.push(obj);
//       console.log("Added to cart: ", obj);
//     }

//     localStorage.setItem("cartItems", JSON.stringify(arr))

//     console.log("Data added to local storage: ", localStorage.getItem("cartItems"));
//   });
// }
// Retrieve cart items from local storage
// var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// // Loop through the buttons
// var buttons = document.querySelectorAll("#Btn");
// this.innerHTML="";
// for (var i = 0; i < buttons.length; i++) {
//   var button = buttons[i];
  
//   // Get the product name
//   var productName = button.parentNode.querySelector("#supname").textContent;
  
//   // Check if the product is in the cart
//   var cartItem = cartItems.find(item => item.Name === productName);
//   if (cartItem) {
//     // Update the button text to show the quantity
//     button.textContent = "Quantity: " + cartItem.quantity;
//   }
  
//   // Add a click event listener to the button
//   button.addEventListener("click", function() {
//     // Add the product to the cart
//     var obj = {
//       image_url: this.parentNode.querySelector("#supimg").getAttribute("src"),
//       Name: this.parentNode.querySelector("#supname").textContent,
//       Price: this.parentNode.querySelector("#supprice").textContent,
//       MRP: this.parentNode.querySelector("#supmrp").textContent,
//       Off: this.parentNode.querySelector("#supoff").textContent,
//       quantity: 1
//     }
//     var found = cartItems.find(item => item.Name === obj.Name);
//     if (found) {
//       found.quantity++;
//     } else {
//       cartItems.push(obj);
//     }
    
//     // Update the button text to show the quantity
//     this.textContent = "Quantity: " + obj.quantity;
    
//     // Save the cart items to local storage
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   });
// }
// Retrieve cart items from local storage
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Loop through the buttons
var buttons = document.querySelectorAll("#Btn");
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  
  // Get the product name
  var productName = button.parentNode.querySelector("#supname").textContent;
  
  // Check if the product is in the cart
  var cartItem = cartItems.find(item => item.Name === productName);
  if (cartItem) {
    // Update the button text to show the quantity
    button.textContent = "Quantity: " + cartItem.quantity;
  }
  
  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Add the product to the cart
    var obj = {
      image_url: this.parentNode.querySelector("#supimg").getAttribute("src"),
      Name: this.parentNode.querySelector("#supname").textContent,
      Price: this.parentNode.querySelector("#supprice").textContent,
      MRP: this.parentNode.querySelector("#supmrp").textContent,
      Off: this.parentNode.querySelector("#supoff").textContent,
      quantity: 1
     
    }
    var found = cartItems.find(item => item.Name === obj.Name);
    if (found) {
      found.quantity++;
      // Update the button text to show the quantity
      this.textContent = "Quantity: " + found.quantity;
    } else {
      cartItems.push(obj);
      // Update the button text to show the quantity
      this.textContent = "Quantity: 1";
    }
    // Save the cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });
}






console.log(arr)



const accordion =document.getElementsByClassName('contentbox');
for(i=0;i<accordion.length;i++)
{
  accordion[i].addEventListener('click',function()
  {
   this.classList.toggle('active');
  })
}






