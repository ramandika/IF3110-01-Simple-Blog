function validate_date(){
		var hari=document.getElementById("daydropdown").value;
		var bulan=document.getElementById("monthdropdown").value;
			if(bulan=="Jan")bulan=0;
			else if(bulan=="Feb")bulan=1;
			else if(bulan=="Mar")bulan=2;
			else if(bulan=="Apr")bulan= 3;
			else if(bulan=="May")bulan= 4;
			else if(bulan=="Jun")bulan= 5;
			else if(bulan=="Jul")bulan= 6;
			else if(bulan=="Aug")bulan= 7;
			else if(bulan=="Sept")bulan= 8;
			else if(bulan=="Oct") bulan= 9;
			else if(bulan=="Nov") bulan= 10;
			else if(bulan=="Dec") bulan= 11;		
		var tahun=document.getElementById("yeardropdown").value;
		var tanggal_input=new Date();
		tanggal_input.setFullYear(tahun,bulan,hari);
		var tanggal_sekarang=new Date();
		if(tanggal_input<tanggal_sekarang) return false;
		else return true;

}

function validate_new_post(){
	document.getElementById("formPost").onsubmit = function(){
		var Judul=document.getElementById("Judul").value;
		var Konten=document.getElementById("Konten").value;
		var errorMessage=document.getElementById("error");
		if(Judul == "" || Konten=="" || !validate_date()) {
			if(validate_date()) errorMessage.innerHTML="*Post Tidak Lengkap";
			else errorMessage.innerHTML="*Tanggal harus tanggal hari ini atau sesudahnya";
			return false;			
		}
		else{
			return true;
		}
	}
}

function ConfirmDelete(ID)
{
    if (confirm("Delete Post?"))
         location.href='hapus.php?ID='+ID;
}

var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

function populatedropdown(dayfield, monthfield, yearfield){
		var today=new Date()
		var dayfield=document.getElementById(dayfield)
		var monthfield=document.getElementById(monthfield)
		var yearfield=document.getElementById(yearfield)
		for (var i=0; i<31; i++)
		dayfield.options[i]=new Option(i+1, i+1)
		dayfield.options[today.getDate()]=new Option(today.getDate(), today.getDate(), true, true) //select today's day
		for (var m=0; m<12; m++)
		monthfield.options[m]=new Option(monthtext[m], monthtext[m])
		monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
		var thisyear=today.getFullYear()
		for (var y=0; y<20; y++){
		yearfield.options[y]=new Option(thisyear, thisyear)
		thisyear+=1
		}
		yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
}

window.onload=function(){
	validate_new_post();
	populatedropdown("daydropdown", "monthdropdown", "yeardropdown");
}