/**
 * Created with JetBrains PhpStorm.
 * User: evgenii
 * Date: 23.09.12
 * Time: 12:59
 * To change this template use File | Settings | File Templates.
 */
//Функция создания таблицы, возвращает объект содержащий таблицу
function createTable(generation){
    var table=document.createElement('table');
    table.setAttribute('id','cTable');
    for(var i= 0,row;i<getSizeGeneration(generation).j;i++){
        row=table.insertRow(i);
        for(var j= 0,cell;j<getSizeGeneration(generation).i;j++){
            cell=row.insertCell(j);
        }
    }
    return table;
}
//Отрисовка таблицы на форме
function drawTable(table){
    document.body.appendChild(table);
}
//Получение размера текущей колонии
function getSizeGeneration(generation){
    var rows=generation.length;
    var cell=generation[0].length;
    var size={j:rows,i:cell};
    return size;
}
//Очистка таблицы
function clearTable(table,generation){
    var sizeTable=getSizeGeneration(generation);
    var row=table.getElementsByTagName("tr");
    for(var i= 0,cell;i<sizeTable.j;i++){
        cell=row[i].getElementsByTagName("td");
        for(var j= 0;j<sizeTable.i;j++){
                cell[j].className="noclr";
        }
    }
}
//Отрисовка колонии в таблице
function drawGenerationFromTable(table,generation){
    var sizeTable=getSizeGeneration(generation);
    var row=table.getElementsByTagName("tr");
    for(var i= 0,cell;i<sizeTable.j;i++){
        cell=row[i].getElementsByTagName("td");
        for(var j= 0;j<sizeTable.i;j++){
            if(generation[i][j]){
                cell[j].className="clr";
            }
        }
    }
}
function createArray(size){
    var newGeneration=new Array(size);
    for(var i=0;i<size;i++){
        newGeneration[i]=new Array(size);
    }
    for(var i=0;i<size;i++)
    {
        for(var j=0;j<size;j++){
            newGeneration[i][j]=0;
        }
    }
    return newGeneration;
}
//Увеличение колонии
function scalingGeneration(generation,newSize){
    var gHeight=getSizeGeneration(generation).i;
    var gWidth=getSizeGeneration(generation).j;
    var newGeneration=createArray(newSize);
    var yPos=Math.abs((parseInt(newSize/2))+(newSize%2)-(parseInt(gHeight/2)));
    var xPos=Math.abs((parseInt(newSize/2))+(newSize%2)-(parseInt(gWidth/2)))-1;
    for(var i=0;i<gWidth;i++){
        for(var j= 0,newXPos=xPos;j<gHeight;j++){
            newGeneration[yPos][newXPos++]=generation[i][j];
            console.log("yPos=",yPos,", xPos=",newXPos," i=",i,", j=",j);
        }
        yPos++;
    }
    return newGeneration;
}
function show(table,N){
    for(var i=0;i<N;i++){
        console.log(table[i].toString());
    }
}
function checkValueOf(generation,i,j){
   try{
       if(generation[i][j]!="undefined" && generation[i][j]>0)
       {
       return 1;
       }
       return 0;
    }
    catch(e){
    return 0;
    }
}
function searchNeighbors(generation,i,j){
    var neigjborsCount=checkValueOf(generation,i-1,j-1)+
                       checkValueOf(generation,i-1,j)+
                       checkValueOf(generation,i-1,j+1)+
                       checkValueOf(generation,i,j+1)+
                       checkValueOf(generation,i+1,j+1)+
                       checkValueOf(generation,i+1,j)+
                       checkValueOf(generation,i+1,j-1)+
                       checkValueOf(generation,i,j-1);
    return neigjborsCount;
}
function createNextGeneration(generation){
    var newGeneration=createArray(getSizeGeneration(generation).i);
    for(var i=0;i<getSizeGeneration(generation).i;i++){
        for(var j=0;j<getSizeGeneration(generation).j;j++){
            if(searchNeighbors(generation,i,j)<2){
                newGeneration[i][j]=0;
            }
            else if(searchNeighbors(generation,i,j)>3){
                newGeneration[i][j]=0;
            }
            else if(searchNeighbors(generation,i,j)==3){
                newGeneration[i][j]=1;
            }
            else
            newGeneration[i][j]=generation[i][j];
        }
    }
    return newGeneration;
}
function test1(){

    mtr=[[1,0,0],
         [0,1,1],
         [1,1,0]];

    mtr1=[[1,0,0,0,0,0,1],
         [0,1,0,0,0,1,0],
         [0,0,1,0,1,0,0],
         [0,0,0,1,0,0,0],
         [0,0,1,0,1,0,0],
         [0,1,0,0,0,1,0],
         [1,0,0,0,0,0,1]];

    mtr4=[[1,1,0,1,1,1],
         [0,1,0,0,1,0],
         [1,0,1,1,1,1],
         [1,1,1,0,1,0],
         [0,0,1,0,1,0],
         [1,0,1,0,1,0]];

    mtr2=[[1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1]];

    mtr4=[[1,1,1,1,1,0,1],
          [1,1,1,1,0,1,0]];
    var genCount=1;
    mtr=scalingGeneration(mtr,45,45);
    tbl=createTable(mtr);
    drawTable(tbl);
    setInterval(function(){
        changeGeneration(genCount);
        genCount++;
    clearTable(tbl,mtr);
    mtr=createNextGeneration(mtr);
    drawGenerationFromTable(tbl,mtr);
    },200);
}
function changeGeneration(generCount){
    var gen=document.getElementById("generation");
    gen.innerHTML="Generation: "+generCount;
}