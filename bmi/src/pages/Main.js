import '../App.css';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import bd from '../bd/bd';
function Main() {
    let q=50
    function mw(){
        bd.w+=1
        let ww44=document.getElementById('ww4')
        ww44.innerHTML=bd.w
        console.log(q)
    }
    function pw(){
        bd.w-=1
        let ww44=document.getElementById('ww4')
        ww44.innerHTML=bd.w
        console.log(q)
    }
    function ph(){
        bd.h+=1
        let hh44=document.getElementById('hh4')
        hh44.innerHTML=bd.h
        console.log(q)
    }
    function mh(){
        bd.h-=1
        let hh44=document.getElementById('hh4')
        hh44.innerHTML=bd.h
        console.log(q)
    }
    function calc(){
        
        let appp=document.getElementById('app1')
        let d=document.getElementById('d')
        let bmi1=document.getElementById('bmi')
        d.style.cssText='display:none'
        appp.style.cssText='display:block'
        let bmi=bd.w/((100+bd.h)/100)/((100+bd.h)/100);
        bmi1.innerHTML=Math.round(bmi)
        let res=document.getElementById('res')
        if(bmi<16){
            res.innerHTML='reduced III'
        }
        else if(bmi<17){
            res.innerHTML='reduced II'
        }
        else if(bmi<18.5){
            res.innerHTML='reduced I'
        }
        else if(bmi<25){
            res.innerHTML='normal'
        }
        else if(bmi<30){
            res.innerHTML='Overweight'
        }
        else if(bmi<35){
            res.innerHTML='Obesity Class I'
        }
        else if(bmi<40){
            res.innerHTML='Obesity Class II'
        }
        else if(bmi>40){
            res.innerHTML='Obesity Class III'
        }
    }
    function back(){
        
        let appp=document.getElementById('app1')
        let d=document.getElementById('d')
        d.style.cssText='display:block'
        appp.style.cssText='display:none'
        
    }
        return (
            <div id="app">
                <div id='d'>
                    <div id='h'>
                        
                        <h4 id='hh4'>{bd.h}</h4>
                        <p id='m' onClick={()=>mh()}><AiFillCaretLeft /></p>
                        <p id='p' onClick={()=>ph()}><AiFillCaretRight /></p>
                        <p id='q'>cm</p>
                    </div>
                    <div id='w'>
                        
                        <h4 id='ww4'>{bd.w}</h4>
                        <p id='m' onClick={()=>pw()}><AiFillCaretLeft /></p>
                        <p id='p' onClick={()=>mw()}><AiFillCaretRight /></p>
                        <p id='q'>kg</p>
                    </div>
                    <button id='cacl' onClick={()=>calc()}>Calculate BMI</button>
                </div>
                
                <div id="app1">
                    <p size='10000x' id='back'onClick={()=>back()}><FiChevronLeft /></p>
                    <h3 id='bmi1'>BMI</h3>
                    <p id='bmi'>{bd.h}</p>
                    <p id='res'></p>
                </div>
            </div>
        );
    
}

export default Main;