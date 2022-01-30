import '../App.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import bd from '../bd/bd'
import Dom from '../img/DomRep_Bacardi_Insel.jpg';

function Domi() {
    
    const mystyle={
        width: "max(65%, 65vw)",
        height: "max(35%, 35vh)",
        position: "absolute",
        bottom: "30%"
        
    }
    const ai={
        fontSize: '20px',
        color: '#fff',
        position: 'absolute',
        top: '1%',
    }
  return (
    
        <div className="App AppPid">
            
            <div id='DomText'>
                <a style={ai} href='/'><AiOutlineArrowLeft /></a>
                <h4 id="DomH4">{bd.DomiH4}</h4>
                <p id="ano1">{bd.ano1}</p>
                
                <br/>
                <br />
                <br/>
                <br />
                <br/>
                <br />
                <br />
                <br/>
                <br />
                <br />
                <br/>
                <br />
                <img style={mystyle} src={Dom}/>
                <p>Домініка́нська Респу́бліка (ісп. República Dominicana pronounced: [reˈpuβlika ðominiˈkana] ( прослухати)) — країна карибського басейну, що займає дві третини острова Гаїті, на схід від держави Республіка Гаїті. Острів розташований західніше від Пуерто-Рико та на схід від Куби і Ямайки. Країна має більш як 500 років європейської історичної спадщини в Західній півкулі. Саме тут вперше оселилися європейські колонізатори Америки, та були збудовані перші в Західній півкулі університет, дорога і фортеця. Першим збудованим іспанцями в Америці містом став Санто-Домінго — сучасна столиця Домініканської республіки.</p>
                <h4>Міжнародні відносини</h4>
                <p>Країна має зовнішні зв'язки з більшістю держав світу. Дипломатичні стосунки з Україною встановлені 21 вересня 2000 р.[1]</p>
                <h4>Туризм</h4>
                <p>Найпопулярніший туристичний регіон країни — Пунта-Кана — розташований на східному узбережжі. Пісок тут дрібний, м’який і сліпуче білий. Близькість коралового рифу робить води спокійними й теплими. Південь курорту омиває тепле Карибське море, а північ і схід оточені величною Атлантикою. Берегова лінія Пунта-Кани складається із лагун і невеликих бухт з чистою і спокійною водою. М’який пляжний пісок, ласкаве тропічне сонце, прекрасні пейзажі — усе це створює сприятливі умови для пляжного відпочинку в райському куточку світу. Домінікана має розвинену туристичну інфраструктуру, що забезпечує широкий вибір і висококласні умови для відпочинку. Крім мальовничого узбережжя, курорт славиться своїми тропічними лісами та дивовижною природою, яка не пошкоджена цивілізацією.</p>
                <h4>УЗБЕРЕЖЖЯ КАРИБСЬКОГО МОРЯ</h4>
                
                <p>Переправившись через річку Дульсе, можна опинитися на курорті Ла-Романа. І варто туристу лише ступити на берег — він тут же опиниться в одному з найбільших туристичних комплексів Карибського басейну! Сьогодні ці місця входять у десятку найкомфортабельніших курортів із найкращою інфраструктурою для туристів, тому тут буде зручно будь-якому мандрівникові, незалежно від його особистих переваг і туристичного досвіду. Якщо туристу необхідно поєднання екзотичної природи, унікальної атмосфери старовинного рибальського села та туристичної інфраструктури, то йому буде за смаком Хуан Доліо. Тут можна одночасно насолоджуватися самотою і тишею пляжів, а також із задоволенням відвідувати різні культурні розваги, історичні місця та ресторанчики з чудовими місцевими стравами. Бока Чіка — найближчий курорт до столиці Санто-Домінго. Загалом розміщення на курорті досить бюджетне. Курорт розташовується в захищеній кораловим рифом лагуні, глибина якої не перевищує півтора метра, а пісок на пляжі білий і дрібний, як мука. Хоч лагуна й неглибока, сюди нерідко приїжджають для занять віндсерфінгом, водними лижами, дайвінгом, вітрильним спортом. Також є можливості для занять тенісом і верховою їздою.</p>
                
                
                <a href='https://uk.wikipedia.org/wiki/Домініканська_Республіка'>wikipedia</a><br />
                <a href='https://www.anextour.com.ua/destination/86/dominician-republic'>anextour</a>
            </div>
            
        </div>
    
      
  );
}

export default Domi;