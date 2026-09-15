fetch("data.json").then(r=>r.json()).then(d=>{
  const months=d.months||[];
  const arch=document.getElementById("archive");
  const latest=document.getElementById("latest-body");
  let newest=null;
  months.forEach(m=>m.reports.forEach(r=>{ if(!newest||r.date>newest.date) newest={...r,month:m.month}; }));
  if(newest){ latest.innerHTML=`<div class="card"><strong>${newest.date}</strong> — ${newest.count} stories<br><a href="../${newest.file}">Read →</a></div>`; }
  else latest.textContent="No reports yet.";
  arch.innerHTML=months.map(m=>`<div class="card"><strong>${m.month}</strong> — ${m.days} days, ${m.stories} stories</div>`).join("")||"Empty.";
}).catch(()=>{document.getElementById("latest-body").textContent="No data yet.";});
