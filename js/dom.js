var fridgediv = document.createElement('div');
fridgediv.id = 'myfdiv';
document.body.appendChild(fridgediv);

var inputf1 = document.createElement('input');
inputf1.id = ' input1';
inputf1.name = ' input1';
inputf1.value = 'Включить холодильник';
inputf1.type = 'button';

inputf1.addEventListener('click', function () {
    fridge.enable();
    inputf1.style.display = 'none';
    var imgf = document.createElement('img')
    imgf.src = 'http://www.e-commerce.pl/zdjecia/Lodowki-wolnostojace/GR-B469BTQA-66363-big.jpg';
    imgf.width = '300';
    imgf.height = '600';
    fridgediv.appendChild(imgf)

    var formf = document.createElement('form');
    formf.name = "f";
    fridgediv.appendChild(formf)

    var inputf2 = document.createElement('input');
    inputf2.value = 'Добавьте еды'
    inputf2.type = 'text';
    inputf2.name = 'namef'
    formf.appendChild(inputf2)

    var inputf3 = document.createElement('input');
    inputf3.name = 'btnf'
    inputf3.type = 'button';
    inputf3.value = 'добавить еду';
    formf.appendChild(inputf3)

    var ul = document.createElement('ul');
    ul.id = 'fridge1';
    document.body.appendChild(ul);
    var inpf = document.forms.f.elements.namef;
    var addf = document.forms.f.elements.btnf;
    var fridge1 = document.getElementById('fridge1');
    addf.addEventListener('click', function () {
        fridge.addFood(inpf.value);
        var li = document.createElement('li');
        li.id = 'list'
        li.innerText = inpf.value;
        fridge1.appendChild(li);

    })

    var formf2 = document.createElement('form');
    formf2.name = "f2";
    fridgediv.appendChild(formf2)
    var inputf3 = document.createElement('input');
    inputf3.value = '-2'
    inputf3.type = 'number';
    inputf3.name = 'namef3';
    formf2.appendChild(inputf3)


    var inputf4 = document.createElement('input');
    inputf4.name = 'btn2'
    inputf4.type = 'button';
    inputf4.value = 'set';

    formf2.appendChild(inputf4)
    var inp2 = document.forms.f2.elements.namef3;
    var add2 = document.forms.f2.elements.btn2;
    add2.addEventListener('click', function () {

        var y = Number(inp2.value);

        fridge.setTemperature(y)
        var textinf = 'Текущая температура холодильника:' + y
        var divinf = document.createElement('div');
        var pinf = document.createElement('p')
        pinf.innerText = textinf;
        fridgediv.appendChild(divinf)
        divinf.appendChild(pinf);
    })

})
fridgediv.appendChild(inputf1)

var microwavediv = document.createElement('div');
microwavediv.id = 'myMdiv';
document.body.appendChild(microwavediv);

var inputm1 = document.createElement('input');
inputm1.id = 'inputm1';
inputm1.name = 'inputm1';
inputm1.value = 'Включить микроволновку';
inputm1.type = 'button';
inputm1.addEventListener('click', function () {
    microwave.enable()
    inputm1.style.display = 'none';
    var imgm = document.createElement('img')
    imgm.src = 'http://delayvkusno.ru/wp-content/uploads/2012/12/9cf16ad9f0bd1943a2733eb4b2f1afcb.jpg';
    imgm.width = '300';
    imgm.height = '300';
    microwavediv.appendChild(imgm)
    var inputoff = document.createElement('input');
    inputoff.id = 'inputoff';
    inputoff.name = 'inputoff';
    inputoff.value = 'Выключить микроволновку';
    inputoff.type = 'button';
    inputoff.addEventListener('click', function () {
        microwave.disable()
    })
    var formm = document.createElement('form');
    formm.name = "fm";
    microwavediv.appendChild(formm)
    var inputm2 = document.createElement('input');
    inputm2.value = '2000'
    inputm2.type = 'number';
    inputm2.step = '1000'
    inputm2.name = 'namem';
    formm.appendChild(inputm2)


    var inputm3 = document.createElement('input');
    inputm3.name = 'btnm'
    inputm3.type = 'button';
    inputm3.value = 'set time';

    formm.appendChild(inputm3)
    var inpm = document.forms.fm.elements.namem;
    var addm = document.forms.fm.elements.btnm;
    addm.addEventListener('click', function () {

        var z = Number(inpm.value);

        microwave._setTimeToCook(z);
        microwave.run();


    })

})
microwavediv.appendChild(inputm1)



var div = document.createElement('div');
div.id = 'mydiv';
document.body.appendChild(div);
var mainDiv = document.getElementById('mydiv');

var newInput1 = document.createElement('input');
newInput1.id = 'myid1';
name = 'myid1'
newInput1.value = 'Включить кофеварку';
newInput1.type = 'button';
newInput1.addEventListener('click', function () {
    coffeeMachine.enable();
    newInput1.style.display = 'none'
    var img1 = document.createElement('img')

    img1.src = 'https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/m/a/magio_mg-960.jpg';
    img1.width = '300';
    img1.height = '400';
    mainDiv.appendChild(img1);
    var form = document.createElement('form');
    form.name = "f1";
    mainDiv.appendChild(form)
    var input2 = document.createElement('input');
    input2.value = 'залейтe воды '
    input2.name = "name"
    input2.type = 'text';
    form.appendChild(input2)
    var input3 = document.createElement('input');
    input3.name = 'btn'
    input3.type = 'button';
    input3.value = 'добавить воды';
    form.appendChild(input3)

    var inp = document.forms.f1.elements.name;
    var add = document.forms.f1.elements.btn;
    add.addEventListener('click', function () {
        coffeeMachine.setWaterAmount(0);
        var x = Number(inp.value);
        console.log(x)
        coffeeMachine.addWater(x)
    })

    var newInput4 = document.createElement('input');
    newInput4.id = 'myid4';
    newInput4.value = 'сварить кофу';
    newInput4.type = 'button';
    newInput4.addEventListener('click', function () {
        coffeeMachine.run();
    });
    mainDiv.appendChild(newInput4)
});
mainDiv.appendChild(newInput1)