
const lessons=[
{title:"What is a process?",simple:"A process is a repeatable series of steps used to create a result.",example:"At a tire shop: check in the car → inspect → lift → remove wheel → service → torque → final check.",alt:"Making coffee is a process: cup → coffee → water → brew → serve.",deep:"Six Sigma studies processes because recurring problems usually come from how work is designed, measured, or controlled—not just one isolated mistake.",action:"Name one process you do often and write only 3–5 steps.",recall:"What makes something a process?",topic:"Process"},
{title:"What is Six Sigma?",simple:"Six Sigma is a structured way to improve a process by reducing mistakes, delays, inconsistency, and waste.",example:"If one tire rotation takes 25 minutes and another takes 70 minutes, Six Sigma asks why and how to make the process more consistent.",alt:"If a restaurant keeps sending out wrong orders, Six Sigma helps find where errors enter the process and how to prevent them.",deep:"Six Sigma uses data and problem-solving tools to understand variation, identify root causes, test improvements, and maintain better performance.",action:"Say out loud: Six Sigma improves processes using data.",recall:"What is Six Sigma trying to improve?",topic:"Six Sigma"},
{title:"Customers and value",simple:"Value is what the customer actually needs or cares about.",example:"A tire-shop customer may value safety, correct installation, reasonable wait time, and clear communication.",alt:"In school, a student values clear instructions, useful feedback, and learning—not unnecessary busywork.",deep:"Voice of the Customer (VOC) translates customer needs into measurable process requirements.",action:"Pick one service you use and name one thing you value as the customer.",recall:"Who decides what counts as value?",topic:"Value"},
{title:"Variation",simple:"Variation means a process does not give exactly the same result every time.",example:"Repair times of 25, 28, 60, and 31 minutes show variation.",alt:"If four cups of coffee taste very different despite the same recipe, the process has variation.",deep:"Some variation is natural; some comes from specific disruptions. Six Sigma tries to understand and reduce harmful variation.",action:"Think of one process that sometimes runs fast and sometimes slow.",recall:"What does variation mean?",topic:"Variation"},
{title:"Defects",simple:"A defect is an output that fails to meet an important requirement.",example:"A wheel is not torqued to specification. A required standard was not met.",alt:"A customer orders a medium shirt and receives a small.",deep:"Defects are defined against customer needs or specifications. Measuring them shows how reliably a process performs.",action:"Give yourself one example of a defect from work, school, or daily life.",recall:"A defect fails to meet what?",topic:"Defects"},
{title:"Waste",simple:"Waste is effort, time, movement, material, or work that does not add value.",example:"A technician walks across the shop five times because tools are stored far away.",alt:"Re-entering the same information into three different forms is extra processing.",deep:"Lean and Six Sigma are often combined. Lean heavily targets flow and waste; Six Sigma heavily targets variation and defects.",action:"Spot one repeated annoying step in your day that may be waste.",recall:"Does every process step automatically add value?",topic:"Waste"},
{title:"DMAIC",simple:"DMAIC is the Five-Step Six Sigma roadmap: Define, Measure, Analyze, Improve, Control.",example:"Define long waits → Measure wait times → Analyze causes → Improve workflow → Control so gains last.",alt:"Define missed homework → Measure when it happens → Analyze why → Improve study system → Control with routines.",deep:"DMAIC keeps teams from jumping straight to solutions before understanding the problem.",action:"Memorize only five words: Define, Measure, Analyze, Improve, Control.",recall:"Why can jumping straight to Improve be risky?",topic:"DMAIC"},
{title:"White Belt big picture",simple:"A White Belt understands the language, goals, and basic structure of process improvement.",example:"You may not run advanced statistical analysis yet, but you can recognize process problems and understand DMAIC.",alt:"Think of White Belt as learning the map before driving the entire route.",deep:"The foundation makes Yellow and Green Belt tools easier because you understand why the tools exist.",action:"Explain Six Sigma to an imaginary friend in two sentences.",recall:"What should a White Belt understand before moving on?",topic:"White Belt"}
];

const flashcards=[
["Process","A repeatable series of steps used to create a result."],
["Six Sigma","A structured, data-driven approach to improving processes."],
["Variation","Differences in process results from one occurrence to another."],
["Defect","An output that fails to meet a requirement."],
["Value","What the customer needs or cares about."],
["Waste","Work or resources that do not add value."],
["DMAIC","Define, Measure, Analyze, Improve, Control."],
["VOC","Voice of the Customer: what customers need and expect."],
["Standard Work","The agreed current best way to do a task consistently."]
];

const whiteBeltQuestionBank=[
{q:"Which description best matches a process?",correct:"A repeatable sequence of connected steps that produces a result",distractors:["A target number used to judge performance","A one-time problem that has no repeated steps","A list of customer complaints with no workflow","A chart used only after a project is finished","A rule that applies only to factories"],topic:"Process",mini:true},
{q:"Which situation is a process?",correct:"Check in a vehicle → inspect it → perform service → verify the work",distractors:["One customer unexpectedly arriving late","A manager having a single idea","A tire being defective before it reaches the shop","One measurement written on a sticky note","A technician noticing a problem once"],topic:"Process",mini:true},
{q:"What is Six Sigma mainly trying to improve?",correct:"How reliably a process produces good results",distractors:["How many meetings a team can schedule","How quickly people work even if quality drops","How often managers change the procedure","How much data is collected without using it","How complicated a process can become"],topic:"Six Sigma",mini:true},
{q:"Why does Six Sigma use data?",correct:"To understand what is actually happening in the process instead of relying only on guesses",distractors:["To make every decision automatically","To prove the first solution is always correct","To replace customer needs with numbers","To avoid defining the problem first","To guarantee that no variation will ever occur"],topic:"Six Sigma",mini:true},
{q:"What does variation mean?",correct:"The results of a process are not exactly the same every time",distractors:["The customer changed the requirement","A process has too many employees","Every result is outside the requirement","The team has reached the Control phase","The process contains no measurable output"],topic:"Variation",mini:true},
{q:"Which set of service times shows the most obvious variation?",correct:"24, 27, 61, and 30 minutes",distractors:["29, 30, 31, and 30 minutes","30, 30, 30, and 30 minutes","28, 29, 30, and 31 minutes","31, 30, 29, and 30 minutes","25, 26, 25, and 26 minutes"],topic:"Variation",mini:true},
{q:"What is a defect?",correct:"An output that fails to meet an important requirement",distractors:["Any step that takes longer than expected","Any difference between two measurements","A process that contains more than three steps","A customer request that is difficult to measure","A problem that can only be found in manufacturing"],topic:"Defects",mini:true},
{q:"Which is the clearest example of a defect?",correct:"A wheel is torqued below the required specification",distractors:["Two technicians complete the same job at slightly different speeds","A customer asks how long the service will take","A shop records the time each repair begins","A technician follows the approved checklist","The team reviews yesterday's wait-time data"],topic:"Defects",mini:true},
{q:"Who ultimately decides whether an output provides value?",correct:"The customer or person receiving the output",distractors:["Whoever created the spreadsheet","The person with the highest belt level","Only the finance department","The employee who performs the most steps","The software used to track the process"],topic:"Value",mini:true},
{q:"What does Voice of the Customer (VOC) focus on?",correct:"What customers need, expect, and care about",distractors:["Which employee performed each task","How many charts are in the project","What the team wants customers to accept","Which DMAIC phase takes the longest","How much variation is allowed by the software"],topic:"Value",mini:true},
{q:"What is waste in a process?",correct:"Time, effort, movement, material, or work that does not add needed value",distractors:["Any step that uses a computer","Every inspection or quality check","Any process step that costs money","Only defective products that must be thrown away","Any task completed by more than one person"],topic:"Waste",mini:true},
{q:"Which example is most likely waste?",correct:"A technician repeatedly walks across the shop because commonly used tools are stored far away",distractors:["A technician verifies wheel torque before releasing a vehicle","A customer confirms the service they requested","A team measures actual wait times for a week","A worker follows a safety requirement","A supervisor checks whether a new process is staying consistent"],topic:"Waste",mini:true},
{q:"Which is the correct DMAIC order?",correct:"Define → Measure → Analyze → Improve → Control",distractors:["Define → Analyze → Measure → Improve → Control","Measure → Define → Analyze → Control → Improve","Define → Measure → Improve → Analyze → Control","Improve → Measure → Analyze → Define → Control","Define → Control → Measure → Analyze → Improve"],topic:"DMAIC",mini:true},
{q:"What is the main job of the Define phase?",correct:"Clearly state the problem, goal, and who is affected",distractors:["Select the final solution and put it in place","Collect enough data to calculate the baseline","Determine which root cause is responsible","Create the controls that will sustain the improvement","Compare several possible solutions after testing"],topic:"DMAIC",mini:true},
{q:"What is the main job of the Measure phase?",correct:"Collect reliable information about current process performance",distractors:["Decide which solution should be standardized","Explain why the root cause exists","Write the final control plan","Change the process before collecting baseline data","Remove every source of natural variation"],topic:"DMAIC",mini:true},
{q:"What is the main job of the Analyze phase?",correct:"Use the evidence to identify likely root causes and patterns",distractors:["Write a broad problem statement","Collect the first baseline measurements only","Standardize the solution after it succeeds","Skip directly to the easiest fix","Decide what customers should value"],topic:"DMAIC",mini:true},
{q:"What happens mainly in the Improve phase?",correct:"Solutions are tested and implemented to address verified causes",distractors:["The problem is first defined","Baseline data is collected for the first time","The team only documents customer needs","Controls are used to sustain a completed change","The team stops measuring because a cause was found"],topic:"DMAIC",mini:true},
{q:"What is the main purpose of the Control phase?",correct:"Keep the improved process performing well over time",distractors:["Create the original problem statement","Collect the first measurements before analysis","Brainstorm every possible cause","Select a customer requirement","Remove the need for future monitoring"],topic:"DMAIC",mini:true},
{q:"Why is DMAIC useful?",correct:"It keeps problem solving in a disciplined order so teams do not jump to solutions too early",distractors:["It guarantees every project will reach zero defects","It removes the need for data once a problem is defined","It is mainly a way to assign blame for failures","It lets teams skip measurement when they know the process","It replaces customer requirements with internal targets"],topic:"DMAIC",mini:true},
{q:"What should a White Belt mainly be able to do?",correct:"Understand basic Six Sigma language, goals, and the DMAIC structure",distractors:["Lead every major enterprise improvement project alone","Perform advanced statistical modeling from memory","Approve all process changes for the organization","Design control charts for every possible process","Replace Green and Black Belts on complex projects"],topic:"White Belt",mini:true},
{q:"A team says, 'Let's buy new equipment immediately' before measuring anything. What is the biggest Six Sigma concern?",correct:"They are jumping to a solution before understanding the problem and evidence",distractors:["They are spending too much time in Control","They have already completed Analyze","They collected too much baseline data","They are focusing too much on customer needs","They are using standard work too early"],topic:"DMAIC"},
{q:"A shop wants to know its normal wait time before changing the workflow. Which DMAIC phase is this?",correct:"Measure",distractors:["Define","Analyze","Improve","Control","Standard Work"],topic:"DMAIC"},
{q:"A team compares long-wait jobs and discovers most delays happen when tools are missing. Which phase best matches this work?",correct:"Analyze",distractors:["Define","Measure","Improve","Control","Voice of the Customer"],topic:"DMAIC"},
{q:"A team tries a new tool layout for one week and compares the results with the old layout. Which phase best matches this?",correct:"Improve",distractors:["Define","Measure","Analyze","Control","White Belt"],topic:"DMAIC"},
{q:"After a successful change, a supervisor tracks wait time weekly and uses a checklist to keep the new method consistent. Which phase is this?",correct:"Control",distractors:["Define","Measure","Analyze","Improve","VOC"],topic:"DMAIC"},
{q:"Which statement about variation is most accurate?",correct:"Some variation is natural, but Six Sigma pays attention to variation that harms performance or requirements",distractors:["Every difference between results is automatically a defect","A good process must produce mathematically identical results every time","Variation only matters after a customer complains","Variation is another word for waste","Variation disappears once a process is documented"],topic:"Variation"},
{q:"A customer requires the correct tire pressure, but the vehicle leaves below that requirement. How should Six Sigma classify the output?",correct:"A defect because an important requirement was missed",distractors:["Normal variation because pressure can change","Waste because the process used a gauge","Value because the service was completed","Control because the process had a standard","A process input because the customer noticed it"],topic:"Defects"},
{q:"Which statement best describes value-added work?",correct:"Work that helps create what the customer actually needs or expects",distractors:["Any task that appears in a written procedure","Any activity that uses employee time","Every measurement taken during a project","Any step approved by management","Any step that makes the process longer"],topic:"Value"},
{q:"Which action best supports Voice of the Customer?",correct:"Learning what customers expect from safety, accuracy, wait time, and communication",distractors:["Choosing requirements without asking what customers need","Measuring only what is easiest to count","Replacing customer feedback with employee preferences","Focusing only on the fastest possible service","Treating every request as equally important without clarification"],topic:"Value"},
{q:"Which statement best explains the relationship between Lean and Six Sigma?",correct:"Lean often targets flow and waste, while Six Sigma strongly targets variation and defects",distractors:["Lean and Six Sigma are completely unrelated systems","Six Sigma only removes waste and Lean only studies defects","Lean replaces the need for DMAIC","Six Sigma applies only to factories while Lean applies only to offices","Both methods avoid using process data"],topic:"Waste"},
{q:"What is standard work?",correct:"An agreed, consistent method for performing a process",distractors:["A list of every possible problem that could happen","A one-time improvement idea that has not been tested","A chart showing customer satisfaction","A rule that prevents a process from ever changing","A record of defects with no instructions"],topic:"Standard Work"},
{q:"What is the main purpose of a checklist?",correct:"Help someone confirm that important steps were completed",distractors:["Replace all training and understanding","Explain every detail of the entire quality system","Choose the root cause automatically","Guarantee that no human mistake can happen","Measure process variation by itself"],topic:"Standard Work"},
{q:"How is a reference manual different from a short checklist?",correct:"A reference manual contains fuller instructions and detail, while a checklist is a quick execution aid",distractors:["A checklist contains more detail than the manual","A reference manual is only used for customer feedback","A checklist is used only during Define","A reference manual is a type of defect report","There is no practical difference between them"],topic:"Standard Work"},
{q:"Why can standard work help Six Sigma?",correct:"A consistent method makes performance easier to measure, compare, and control",distractors:["It eliminates the need to ever improve the process again","It makes customer requirements unnecessary","It guarantees all employees work at the same speed","It prevents teams from collecting data","It removes all natural variation instantly"],topic:"Standard Work"},
{q:"A process gives fast results most days but occasionally takes three times longer. What should the team investigate?",correct:"What is different about the unusually long cases and what may be causing that variation",distractors:["Only the average employee speed","Whether the team can remove all measurements","How to make the normal cases slower","Whether customer needs should be ignored","How to skip Analyze and go directly to Control"],topic:"Variation"},
{q:"Which approach is most consistent with Six Sigma thinking?",correct:"Define the problem, gather evidence, investigate causes, test improvements, and sustain what works",distractors:["Choose the most popular solution first and measure later","Change several things at once without a baseline","Assume the first explanation is the root cause","Focus only on speed and ignore requirements","Stop measuring as soon as performance improves once"],topic:"Six Sigma"},
{q:"A team records actual start and finish times instead of relying on memory. What Six Sigma habit does this show?",correct:"Using data to understand current performance",distractors:["Replacing the customer with a metric","Skipping the Define phase","Treating every delay as a defect","Performing Control before Improve","Eliminating all variation"],topic:"Six Sigma"},
{q:"What is a root cause?",correct:"An underlying reason that helps explain why a problem is happening",distractors:["The first symptom anyone notices","Any result outside the average","The employee closest to the problem","The final solution chosen by management","A customer requirement written as a number"],topic:"DMAIC"},
{q:"Why is fixing only a symptom risky?",correct:"The underlying cause may remain, so the problem can return",distractors:["Symptoms are always more important than causes","It makes data impossible to collect","It automatically creates more customer value","It means the process has reached Control","It guarantees the solution will be too expensive"],topic:"DMAIC"},
{q:"Which example best shows Control after an improvement?",correct:"The new method is documented, important results are monitored, and the team checks that the gains continue",distractors:["The team brainstorms possible causes","The team first asks what the problem is","The team collects its first baseline measurements","The team tests several possible layouts","The team decides what customers should want"],topic:"DMAIC"}
];

const miniQuizBank=whiteBeltQuestionBank.filter(q=>q.mini);

function buildAssessmentRound(bank,count){
  return shuffleArray(bank).slice(0,Math.min(count,bank.length)).map(q=>{
    const distractors=shuffleArray(q.distractors).slice(0,3);
    const answers=shuffleArray([q.correct,...distractors]);
    return {q:q.q,options:answers,a:answers.indexOf(q.correct),topic:q.topic};
  });
}


const dmaic=[
{title:"Define",prompt:"What should the team do first?",opts:["Clearly describe the wait-time problem and who it affects","Buy new equipment immediately","Fire the slowest technician"],a:0},
{title:"Measure",prompt:"What belongs here?",opts:["Collect actual wait-time data and process timing","Guess the average from memory","Choose a solution before measuring"],a:0},
{title:"Analyze",prompt:"What belongs here?",opts:["Find patterns and root causes behind long waits","Advertise shorter waits","Stop collecting data because it is boring"],a:0},
{title:"Improve",prompt:"What belongs here?",opts:["Test changes such as better scheduling or tool placement","Rewrite the original problem statement only","Ignore root causes"],a:0},
{title:"Control",prompt:"What belongs here?",opts:["Track results and standardize the better process","End measurement forever","Remove the new standard"],a:0}
];

let old=JSON.parse(localStorage.getItem("sigmaState")||'{"done":[],"current":0}');
let state=JSON.parse(localStorage.getItem("sigmaStateV2")||"null")||{
  done:old.done||[],current:old.current||0,xp:(old.done||[]).length*20,quizBest:0,examBest:0,
  mastery:{},lastStudy:null,streak:0,notes:"",tasks:{},sounds:true,
  lessonFinishRewarded:false,quizPerfectRewarded:false,examReadyRewarded:false,dmaicRewarded:{},
  achievements:[],bestCombo:0,finalStudyRewarded:false,quizTaken:false,examTaken:false,standardQuizRewarded:false
};
state.dmaicRewarded=state.dmaicRewarded||{};
state.achievements=state.achievements||[];
state.bestCombo=state.bestCombo||0;
state.finalStudyRewarded=!!state.finalStudyRewarded;
state.quizTaken=!!state.quizTaken;state.examTaken=!!state.examTaken;state.standardQuizRewarded=!!state.standardQuizRewarded;
state.flashRatings=state.flashRatings||{};
let current=Math.min(state.current||0,lessons.length-1);
let cardIndex=0,flipped=false,typedFlashAttempt="";
let answerCombo=0;
let dmaicComboCounted={};
let sessionStartXP=state.xp||0,sessionCorrect=0,sessionLessons=0,sessionBonusGranted=false;
let activeMiniQuiz=[],activeExam=[];
let dmaicOptionOrders={};


function shuffleArray(arr){
  const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a;
}
function shuffledAssessment(items){
  return shuffleArray(items.map(q=>{
    const source=[...(q.options||q.o)],correct=source[q.a],mixed=shuffleArray(source);
    const copy={...q,a:mixed.indexOf(correct)};
    if(q.options)copy.options=mixed;else copy.o=mixed;
    return copy;
  }));
}
function shuffleAnswersOnly(items){
  return items.map(q=>{
    const source=[...(q.options||q.o)],correct=source[q.a],mixed=shuffleArray(source);
    const copy={...q,a:mixed.indexOf(correct)};
    if(q.options)copy.options=mixed;else copy.o=mixed;
    return copy;
  });
}
function maybeBonus(){
  if(sessionBonusGranted||(sessionCorrect+sessionLessons)<2||Math.random()>.28)return;
  sessionBonusGranted=true;addXP(5);playTone("win");launchConfetti(30);showReward("🎁 Mystery bonus!","+5 XP for keeping your study momentum going.");
}
function soundsEnabled(){return state.sounds!==false}
let clickAudioCtx=null;
function playClick(){
  if(!soundsEnabled())return;
  try{
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return;
    if(!clickAudioCtx)clickAudioCtx=new AC();
    if(clickAudioCtx.state==="suspended")clickAudioCtx.resume();
    const ctx=clickAudioCtx,now=ctx.currentTime;
    const gain=ctx.createGain(),osc=ctx.createOscillator();
    osc.connect(gain);gain.connect(ctx.destination);
    // Rounded little "pop": slightly louder than before, but softer in tone.
    osc.type="sine";
    osc.frequency.setValueAtTime(465,now);
    osc.frequency.exponentialRampToValueAtTime(325,now+.06);
    gain.gain.setValueAtTime(.041,now);
    gain.gain.exponentialRampToValueAtTime(.0001,now+.072);
    osc.start(now);osc.stop(now+.078);
  }catch(e){}
}
function playTone(kind="win"){
  if(!soundsEnabled())return;
  try{
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return;
    const ctx=new AC(),gain=ctx.createGain(),osc=ctx.createOscillator();
    osc.connect(gain);gain.connect(ctx.destination);
    const now=ctx.currentTime;
    const tones=kind==="answer"?[523.25,659.25,783.99,1046.5]:kind==="big"?[523.25,659.25,783.99]:kind==="soft"?[440,523.25]:[659.25,783.99];
    const peak=kind==="answer"?.105:.07;
    const duration=kind==="answer"?.48:.34;
    gain.gain.setValueAtTime(.0001,now);
    gain.gain.exponentialRampToValueAtTime(peak,now+.015);
    gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
    osc.type="sine";
    osc.frequency.setValueAtTime(tones[0],now);
    tones.slice(1).forEach((f,i)=>osc.frequency.setValueAtTime(f,now+.09*(i+1)));
    osc.start(now);osc.stop(now+duration+.02);
    setTimeout(()=>ctx.close().catch(()=>{}),650);
  }catch(e){}
}
function showReward(title,message,big=false){
  let toast=document.getElementById("rewardToast");
  if(!toast){
    toast=document.createElement("div");toast.id="rewardToast";toast.className="rewardToast";
    document.body.appendChild(toast);
  }
  toast.innerHTML=`<strong>${title}</strong><div class="small">${message}</div>`;
  toast.classList.remove("show");void toast.offsetWidth;toast.classList.add("show");
  clearTimeout(window.__rewardToastTimer);
  window.__rewardToastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
  if(big)launchConfetti();
}
function launchConfetti(count=44){
  if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const layer=document.createElement("div");layer.className="confettiLayer";document.body.appendChild(layer);
  const colors=["#7dd3fc","#86efac","#fde68a","#c4b5fd","#fca5a5"];
  for(let i=0;i<count;i++){
    const piece=document.createElement("span");piece.className="confettiPiece";
    piece.style.left=(Math.random()*100)+"vw";
    piece.style.background=colors[i%colors.length];
    piece.style.animationDelay=(Math.random()*.25)+"s";
    piece.style.transform=`rotate(${Math.random()*180}deg)`;
    layer.appendChild(piece);
  }
  setTimeout(()=>layer.remove(),1900);
}
const achievementDefs=[
  {id:"first-step",icon:"🌱",name:"First Step",desc:"Complete your first lesson.",test:()=>state.done.length>=1},
  {id:"five-down",icon:"⭐",name:"Momentum",desc:"Complete 5 White Belt lessons.",test:()=>state.done.length>=5},
  {id:"dmaic-rookie",icon:"🧪",name:"DMAIC Rookie",desc:"Get all 5 DMAIC simulator steps correct.",test:()=>Object.keys(state.dmaicRewarded||{}).length>=5},
  {id:"combo-3",icon:"🔥",name:"On a Roll",desc:"Reach a 3-answer correct combo.",test:()=>state.bestCombo>=3},
  {id:"perfect-recall",icon:"🏅",name:"Perfect Recall",desc:"Score 5/5 on the mini quiz.",test:()=>!!state.quizPerfectRewarded},
  {id:"practice-ready",icon:"🥋",name:"Practice Ready",desc:"Reach 80%+ on the practice exam.",test:()=>!!state.examReadyRewarded},
  {id:"foundation-finisher",icon:"🏁",name:"Foundation Finisher",desc:"Complete every White Belt lesson.",test:()=>state.done.length===lessons.length}
];
function renderAchievements(){
  const shelves=[document.getElementById("achievementShelf"),document.getElementById("trophyShelf")].filter(Boolean);
  shelves.forEach(shelf=>{shelf.innerHTML="";achievementDefs.forEach(a=>{
    const unlocked=state.achievements.includes(a.id)||a.test();
    const d=document.createElement("div");d.className="achievementItem "+(unlocked?"unlocked":"");
    d.innerHTML=`<span class="achievementIcon">${unlocked?a.icon:"🔒"}</span><strong>${a.name}</strong><div class="small">${unlocked?a.desc:"Locked • "+a.desc}</div>`;
    shelf.appendChild(d);
  })});
  const unlocked=achievementDefs.filter(a=>state.achievements.includes(a.id)||a.test()).length;
  const tc=document.getElementById("trophyCount");if(tc)tc.textContent=`${unlocked} / ${achievementDefs.length}`;
  const hc=document.getElementById("homeTrophyCount");if(hc)hc.textContent=`${unlocked} unlocked`;
}
function checkAchievements(show=true){
  let fresh=[];
  achievementDefs.forEach(a=>{
    if(a.test()&&!state.achievements.includes(a.id)){state.achievements.push(a.id);fresh.push(a)}
  });
  if(fresh.length){localStorage.setItem("sigmaStateV2",JSON.stringify(state))}
  if(fresh.length&&show){
    const a=fresh[fresh.length-1];playTone("big");showReward(`${a.icon} Achievement unlocked!`,`${a.name} • ${a.desc}`,true);
  }
  renderAchievements();
}
function showCombo(n){
  if(n<2)return;
  let pill=document.getElementById("comboPill");
  if(!pill){pill=document.createElement("div");pill.id="comboPill";pill.className="comboPill";document.body.appendChild(pill)}
  pill.textContent=n>=5?`🔥 ${n}x COMBO!`:n>=3?`⚡ ${n} correct in a row!`:`✨ ${n}x combo`;
  pill.classList.remove("show");void pill.offsetWidth;pill.classList.add("show");
  clearTimeout(window.__comboTimer);window.__comboTimer=setTimeout(()=>pill.classList.remove("show"),1500);
}
function registerAnswerResult(correct,token){
  if(token&&token.dataset.comboCounted==="1")return;
  if(token)token.dataset.comboCounted="1";
  if(correct){
    sessionCorrect++;answerCombo++;
    if(answerCombo>state.bestCombo){state.bestCombo=answerCombo;checkAchievements(true)}
    if(answerCombo>=2){showCombo(answerCombo);if(answerCombo===3||answerCombo===5)launchConfetti(answerCombo===5?100:60)}
    maybeBonus();
  }else answerCombo=0;
}
function showLevelUp(level){
  let ov=document.getElementById("levelUpOverlay");
  if(!ov){ov=document.createElement("div");ov.id="levelUpOverlay";ov.className="levelUpOverlay";ov.innerHTML='<div class="levelUpCard"><span class="levelUpIcon">⚡</span><div class="eyebrow">XP milestone</div><h2 id="levelUpTitle"></h2><p>Nice — your study XP just crossed another checkpoint.</p></div>';document.body.appendChild(ov)}
  ov.querySelector("#levelUpTitle").textContent=`LEVEL ${level}!`;
  ov.classList.add("show");launchConfetti(100);playTone("big");
  clearTimeout(window.__levelTimer);window.__levelTimer=setTimeout(()=>ov.classList.remove("show"),1900);
}
function showFinalMilestone(){
  let ov=document.getElementById("milestoneOverlay");
  if(!ov){ov=document.createElement("div");ov.id="milestoneOverlay";ov.className="milestoneOverlay";ov.innerHTML='<div class="milestoneCard"><span class="milestoneIcon">🥋🏆</span><div class="eyebrow">Study milestone</div><h2>WHITE BELT STUDY MILESTONE COMPLETE!</h2><p>You completed every lesson and reached 80%+ on the practice exam.</p><div class="rewardBadge">Foundation built • Keep reviewing before the official certification exam</div></div>';document.body.appendChild(ov)}
  ov.classList.add("show");launchConfetti(160);playTone("answer");
  setTimeout(()=>playTone("big"),260);
  clearTimeout(window.__milestoneTimer);window.__milestoneTimer=setTimeout(()=>ov.classList.remove("show"),3300);
}
function checkFinalStudyMilestone(){
  if(!state.finalStudyRewarded&&state.done.length===lessons.length&&(state.examBest||0)>=80){
    state.finalStudyRewarded=true;addXP(75);
    showFinalMilestone();showReward("🏆 Final study bonus","White Belt study milestone • +75 XP",true);
  }
}

function rewardLessonCompletion(){
  lessonReward.classList.remove("hidden");
  lessonReward.classList.remove("pulseReward");void lessonReward.offsetWidth;lessonReward.classList.add("pulseReward");
  lessonRewardTitle.textContent=`🏁 Lesson ${current+1} complete!`;
  lessonRewardText.textContent=`+20 XP. Tiny win secured — ${lessons[current].title}.`;
  playTone("win");
  showReward("⭐ Lesson complete!",`+20 XP • ${lessons[current].title}`);
  if(state.done.length===lessons.length&&!state.lessonFinishRewarded){
    state.lessonFinishRewarded=true;
    addXP(50);
    playTone("big");
    launchConfetti(130);
    showReward("🏆 White Belt lesson finish line!","All lessons complete • +50 bonus XP • Foundation Finisher badge",true);
  }
  checkAchievements(true);
  checkFinalStudyMilestone();
}

function today(){return new Date().toISOString().slice(0,10)}
function touchStudy(){
  const t=today();
  if(state.lastStudy===t)return;
  if(state.lastStudy){
    const d1=new Date(state.lastStudy+"T00:00:00"),d2=new Date(t+"T00:00:00");
    const diff=Math.round((d2-d1)/86400000);
    state.streak=diff===1?(state.streak||1)+1:1;
  }else state.streak=1;
  state.lastStudy=t;
}
function addXP(n){
  touchStudy();
  const before=Math.floor((state.xp||0)/100)+1;
  state.xp=(state.xp||0)+n;
  const after=Math.floor((state.xp||0)/100)+1;
  save();
  if(after>before)showLevelUp(after);
}
function save(){state.current=current;localStorage.setItem("sigmaStateV2",JSON.stringify(state));updateUI()}
function renderJourney(){
  const map=document.getElementById("journeyMap");if(!map)return;
  const dmaicDone=Object.keys(state.dmaicRewarded||{}).length;
  const steps=[
    {icon:"🌱",label:"Start",status:"Journey begun",done:true,view:"home"},
    {icon:"🧠",label:"Lessons",status:`${state.done.length}/${lessons.length} complete`,done:state.done.length===lessons.length,active:state.done.length<lessons.length,view:"lessons"},
    {icon:"✅",label:"Mini Quiz",status:state.quizTaken?`Best ${state.quizBest||0}/5`:"Not taken",done:state.quizTaken,active:state.done.length===lessons.length&&!state.quizTaken,view:"quiz"},
    {icon:"🧪",label:"DMAIC",status:`${dmaicDone}/5 solved`,done:dmaicDone>=5,active:state.quizTaken&&dmaicDone<5,view:"dmaic"},
    {icon:"📝",label:"Practice",status:state.examTaken?`Best ${state.examBest||0}%`:"Not taken",done:(state.examBest||0)>=80,active:dmaicDone>=5&&(state.examBest||0)<80,view:"exam"},
    {icon:"🏁",label:"Finish",status:state.finalStudyRewarded?"Study milestone!":"Reach 80%+",done:state.finalStudyRewarded,active:state.done.length===lessons.length&&(state.examBest||0)>=80,view:"home"}
  ];
  map.innerHTML="";steps.forEach(st=>{const b=document.createElement("button");b.className=`journeyNode ${st.done?"done":st.active?"active":"locked"}`;b.innerHTML=`<span class="journeyIcon">${st.done?"✓ "+st.icon:st.icon}</span><div class="journeyLabel">${st.label}</div><div class="journeyStatus">${st.status}</div>`;b.onclick=()=>showView(st.view);map.appendChild(b)});
  const gate=document.getElementById("finishGate"),txt=document.getElementById("finishGateText");
  if(gate){gate.classList.toggle("ready",!!state.finalStudyRewarded);gate.querySelector("strong").textContent=state.finalStudyRewarded?"🏆 WHITE BELT STUDY FINISH LINE REACHED":"🏁 Finish line locked";txt.textContent=state.finalStudyRewarded?"Foundation study milestone complete. Keep reviewing before the official provider exam.":"Complete all lessons and reach 80%+ on the practice exam."}
}
function getMission(){
  const dmaicDone=Object.keys(state.dmaicRewarded||{}).length;
  const next=lessons.findIndex((_,i)=>!state.done.includes(i));
  if(next>=0)return{title:`Finish Lesson ${next+1}: ${lessons[next].title}`,text:lessons[next].action,reward:"+20 XP for completing the lesson",view:"lessons",lesson:next,label:"Continue lesson →"};
  if(!state.quizTaken)return{title:"Take the 5-question Mini Quiz",text:"Use recall before looking anything up.",reward:"Quiz XP + possible Perfect Recall badge",view:"quiz",label:"Start Mini Quiz →"};
  if(dmaicDone<5)return{title:`Complete DMAIC Simulator (${dmaicDone}/5)`,text:"Practice the five phases in order with real decisions.",reward:"XP + DMAIC Rookie badge",view:"dmaic",label:"Practice DMAIC →"};
  if((state.examBest||0)<80)return{title:"Reach 80% on the Practice Exam",text:`Current best: ${state.examBest||0}%. Mix it up for a fresh attempt.`,reward:"Practice Ready badge at 80%+",view:"exam",label:"Open Practice Exam →"};
  return{title:"Foundation study milestone reached",text:"Review weak topics and your official study manual before the certification exam.",reward:"Your White Belt study path is lit up 🏁",view:"mastery",label:"Review Mastery →"};
}
function showSessionSummary(){
  let ov=document.getElementById("sessionOverlay");if(!ov){ov=document.createElement("div");ov.id="sessionOverlay";ov.className="sessionOverlay";ov.innerHTML='<div class="sessionCard"><div class="eyebrow">Study session complete</div><h2>🏁 Nice work today</h2><p class="muted" id="sessionMessage"></p><div class="sessionStats"><div class="sessionStat"><strong id="sessionXP">0</strong><span class="small">XP earned</span></div><div class="sessionStat"><strong id="sessionCorrect">0</strong><span class="small">correct checks</span></div><div class="sessionStat"><strong id="sessionLessons">0</strong><span class="small">lessons finished</span></div></div><div class="rewardBadge" id="sessionStreak"></div><div class="btnRow" style="justify-content:center"><button class="btn primary" id="closeSession">Done for now ✓</button></div></div>';document.body.appendChild(ov)}
  document.getElementById("sessionXP").textContent=Math.max(0,(state.xp||0)-sessionStartXP);document.getElementById("sessionCorrect").textContent=sessionCorrect;document.getElementById("sessionLessons").textContent=sessionLessons;document.getElementById("sessionStreak").textContent=`🔥 ${state.streak||0}-day study streak`;document.getElementById("sessionMessage").textContent=(sessionCorrect+sessionLessons)>0?"You moved the journey forward. Small wins are exactly what this site is built for.":"Even a short review counts. Come back when you want the next tiny mission.";ov.classList.add("show");playTone("big");launchConfetti(70);document.getElementById("closeSession").onclick=()=>ov.classList.remove("show");
}
function calculateJourneyProgress(){
  const lessonPoints=(state.done.length/lessons.length)*50;
  const quizPoints=state.quizTaken?10:0;
  const dmaicDone=Math.min(5,Object.keys(state.dmaicRewarded||{}).length);
  const dmaicPoints=(dmaicDone/5)*20;
  const examPoints=Math.min(20,((state.examBest||0)/80)*20);
  return Math.max(0,Math.min(100,Math.round(lessonPoints+quizPoints+dmaicPoints+examPoints)));
}
function updateUI(){
  const pct=calculateJourneyProgress(),xp=state.xp||0,level=Math.floor(xp/100)+1,within=xp%100;
  document.getElementById("progressBar").style.width=pct+"%";
  document.getElementById("progressText").textContent=`White Belt journey: ${pct}%`;
  document.getElementById("xpStat").textContent=xp;
  document.getElementById("streakStat").textContent=(state.streak||0)+" day"+((state.streak||0)===1?"":"s");
  const lt=document.getElementById("levelText");if(lt)lt.textContent="Level "+level;
  const xpt=document.getElementById("xpLevelText");if(xpt)xpt.textContent=`${within} / 100 XP to Level ${level+1}`;
  const xpb=document.getElementById("xpLevelBar");if(xpb)xpb.style.width=within+"%";
  const hx=document.getElementById("homeXP");if(hx)hx.textContent=`${xp} XP earned`;
  document.getElementById("streakText").textContent=state.streak?`${state.streak}-day study streak. Small sessions count.`:"Study today to start your streak.";
  const m=getMission();document.getElementById("missionTitle").textContent=m.title;document.getElementById("todayGoal").textContent=m.text;document.getElementById("missionReward").textContent=m.reward;document.getElementById("missionBtn").textContent=m.label;document.getElementById("missionBtn").onclick=()=>{if(Number.isInteger(m.lesson))current=m.lesson;showView(m.view)};
  const next=lessons.findIndex((_,i)=>!state.done.includes(i));document.getElementById("continueBtn").textContent=next>=0?(state.done.length?"Continue studying":"Start Lesson 1"):"Review lessons";
  renderHomeLessons();renderMastery();renderAchievements();renderJourney();
}
function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  document.querySelectorAll(".navBtn").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  if(id==="lessons")renderLesson();
}
document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>showView(b.dataset.view));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>showView(b.dataset.go));
const retroLaunchStandard=document.getElementById("retroLaunchStandard");
if(retroLaunchStandard) retroLaunchStandard.onclick=()=>{showView("standard");setTimeout(()=>document.getElementById("standardWorkGame")?.scrollIntoView({behavior:"smooth",block:"start"}),80)};
const retroLearnStandard=document.getElementById("retroLearnStandard");
if(retroLearnStandard) retroLearnStandard.onclick=()=>showView("standard");

function renderHomeLessons(){
  const box=document.getElementById("homeLessonList");box.innerHTML="";
  lessons.forEach((l,i)=>{
    const d=document.createElement("div");d.className="lessonItem "+(state.done.includes(i)?"done":"");
    d.innerHTML=`<div class="check">${state.done.includes(i)?"✓":i+1}</div><div><strong>${l.title}</strong><div class="small">${l.action}</div></div>`;
    d.onclick=()=>{current=i;save();showView("lessons")};box.appendChild(d);
  });
}
function renderLesson(){
  const l=lessons[current];
  lessonEyebrow.textContent=`Lesson ${current+1} of ${lessons.length}`;
  lessonTitle.textContent=l.title;lessonSimple.textContent=l.simple;lessonExample.textContent=l.example;lessonDeep.textContent=l.deep;
  microAction.textContent=l.action;recallPrompt.textContent=l.recall;deepBox.classList.add("hidden");anotherBtn.dataset.alt="0";
  const isDone=state.done.includes(current);
  completeBtn.textContent=isDone?"✅ Completed":"✅ Mark complete";
  lessonReward.classList.toggle("hidden",!isDone);
  if(isDone){
    lessonRewardTitle.textContent=`🏁 Lesson ${current+1} finish line reached`;
    lessonRewardText.textContent=`Completed: ${l.title}. Keep the streak going when you're ready.`;
  }
}
deeperBtn.onclick=()=>deepBox.classList.toggle("hidden");
anotherBtn.onclick=e=>{const l=lessons[current],alt=e.target.dataset.alt==="1";lessonExample.textContent=alt?l.example:l.alt;e.target.dataset.alt=alt?"0":"1"};
completeBtn.onclick=()=>{
  if(!state.done.includes(current)){
    state.done.push(current);state.done.sort((a,b)=>a-b);
    state.mastery[lessons[current].topic]=Math.max(state.mastery[lessons[current].topic]||0,60);
    sessionLessons++;addXP(20);rewardLessonCompletion();maybeBonus();
  }else{
    playTone("soft");showReward("✅ Already completed","No extra XP needed — you already earned this win.");
  }
  save();renderLesson();
};
prevLesson.onclick=()=>{current=Math.max(0,current-1);save();renderLesson()};
nextLesson.onclick=()=>{current=Math.min(lessons.length-1,current+1);save();renderLesson()};
continueBtn.onclick=()=>{const next=lessons.findIndex((_,i)=>!state.done.includes(i));current=next>=0?next:0;save();showView("lessons")};
endSessionBtn.onclick=showSessionSummary;

const flashAnswerInput=document.getElementById("flashAnswerInput");
const checkFlashAnswer=document.getElementById("checkFlashAnswer");
const flashGrade=document.getElementById("flashGrade");
const flashFeedback=document.getElementById("flashFeedback");
const flashStats=document.getElementById("flashStats");
const reviewAgain=document.getElementById("reviewAgain");

function flashCounts(){
  const vals=Object.values(state.flashRatings||{});
  return{got:vals.filter(v=>v==="got").length,almost:vals.filter(v=>v==="almost").length,again:vals.filter(v=>v==="again").length};
}
function renderFlashStats(){
  const c=flashCounts();
  flashStats.innerHTML=`<span class="flashStat">✅ Got it: ${c.got}</span><span class="flashStat">🟡 Almost: ${c.almost}</span><span class="flashStat">🔴 Practice again: ${c.again}</span>`;
  reviewAgain.disabled=c.again===0;
}
function resetFlashInput(){
  flipped=false;typedFlashAttempt="";
  flashAnswerInput.value="";flashAnswerInput.disabled=false;
  flashGrade.classList.add("hidden");flashFeedback.textContent="";
  checkFlashAnswer.disabled=false;checkFlashAnswer.textContent="Check Answer & Flip";
}
function renderCard(){
  flashcard.classList.toggle("revealed",flipped);
  flashcard.innerHTML="";
  if(flipped){
    const wrap=document.createElement("div");
    const label=document.createElement("div");label.className="small";label.textContent="Meaning";
    const def=document.createElement("div");def.textContent=flashcards[cardIndex][1];
    const attempt=document.createElement("div");attempt.className="flashAttempt";
    attempt.textContent=`Your answer: ${typedFlashAttempt}`;
    wrap.append(label,def,attempt);flashcard.appendChild(wrap);
  }else{
    const wrap=document.createElement("div");
    const label=document.createElement("div");label.className="small";label.textContent="TERM";
    const term=document.createElement("div");term.textContent=flashcards[cardIndex][0];
    wrap.append(label,term);flashcard.appendChild(wrap);
  }
  const rating=state.flashRatings[cardIndex];
  const ratingText=rating?` • Last rating: ${rating==="got"?"Got it ✅":rating==="almost"?"Almost 🟡":"Practice again 🔴"}`:"";
  cardCount.textContent=`Card ${cardIndex+1} of ${flashcards.length}${ratingText}`;
  renderFlashStats();
}
function revealFlashAnswer(){
  const attempt=flashAnswerInput.value.trim();
  if(!attempt){flashFeedback.textContent="Type your best guess first — even a short answer is okay.";playTone("soft");return;}
  typedFlashAttempt=attempt;flipped=true;flashAnswerInput.disabled=true;checkFlashAnswer.disabled=true;
  checkFlashAnswer.textContent="Answer revealed ✓";flashGrade.classList.remove("hidden");
  flashFeedback.textContent="Compare the meaning, not the exact sentence. Then rate yourself.";
  renderCard();playTone("soft");
}
function moveCard(delta){cardIndex=(cardIndex+delta+flashcards.length)%flashcards.length;resetFlashInput();renderCard();flashAnswerInput.focus()}
checkFlashAnswer.onclick=revealFlashAnswer;
flashAnswerInput.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();revealFlashAnswer()}});
prevCard.onclick=()=>moveCard(-1);
nextCard.onclick=()=>moveCard(1);
reviewAgain.onclick=()=>{
  const again=[];for(let i=0;i<flashcards.length;i++)if(state.flashRatings[i]==="again")again.push(i);
  if(!again.length){showReward("🎉 No red cards","You have no cards marked Practice again right now.");return;}
  const pos=again.findIndex(i=>i>cardIndex);cardIndex=pos>=0?again[pos]:again[0];resetFlashInput();renderCard();flashAnswerInput.focus();
};
document.querySelectorAll("[data-flash-grade]").forEach(b=>b.onclick=()=>{
  if(!flipped)return;
  const grade=b.dataset.flashGrade,rank={again:0,almost:1,got:2};
  const old=state.flashRatings[cardIndex];
  state.flashRatings[cardIndex]=grade;
  const gain=Math.max(0,rank[grade]-(old?rank[old]:0));
  if(gain){addXP(gain);showReward(grade==="got"?"✅ Vocabulary win!":"🟡 Getting closer!",`+${gain} XP • Meaning matters more than exact wording.`)}else{save();playTone("soft")}
  moveCard(1);
});

function renderAssessment(items,container,mode="perQuestion"){
  container.innerHTML="";
  container.dataset.submitted="0";
  container.dataset.mode=mode;
  items.forEach((q,qi)=>{
    const box=document.createElement("div");box.className="quizQ";
    box.innerHTML=`<strong>${qi+1}. ${q.q}</strong>`;
    const opts=q.options||q.o;
    opts.forEach((op,oi)=>{
      const b=document.createElement("button");b.className="option";b.textContent=op;b.type="button";
      b.onclick=()=>{
        if(container.dataset.submitted==="1")return;
        box.querySelectorAll(".option").forEach(x=>{x.dataset.selected="0";x.classList.remove("selected","correct","wrong")});
        b.dataset.selected="1";b.classList.add("selected");
        const feedback=box.querySelector(".questionFeedback");
        if(feedback){feedback.classList.add("hidden");feedback.innerHTML=""}
      };
      box.appendChild(b);
    });
    if(mode!=="deferred"){
      const check=document.createElement("button");check.className="btn primary questionCheck";check.type="button";check.textContent="Check answer";
      const feedback=document.createElement("div");feedback.className="gameFeedback hidden questionFeedback";
      check.onclick=()=>{
        const selected=[...box.querySelectorAll(".option")].findIndex(b=>b.dataset.selected==="1");
        if(selected<0){
          feedback.className="gameFeedback questionFeedback bad";
          feedback.innerHTML="<strong>Pick an answer first.</strong> Then press Check answer.";
          return;
        }
        const correct=selected===q.a;
        box.querySelectorAll(".option").forEach((b,oi)=>{
          b.classList.remove("correct","wrong");
          if(oi===q.a)b.classList.add("correct");
          if(oi===selected&&!correct)b.classList.add("wrong");
        });
        feedback.className=`gameFeedback questionFeedback ${correct?"good":"bad"}`;
        feedback.innerHTML=correct?"<strong>Correct! 🎉</strong> Nice job — you checked it before seeing the result.":"<strong>Not quite.</strong> The correct answer is highlighted in green. Review it once, then keep going.";
        registerAnswerResult(correct,check);
        if(correct){playTone("answer");launchConfetti(72)}
        else playTone("soft");
      };
      box.appendChild(check);box.appendChild(feedback);
    }
    container.appendChild(box);
  });
}
function unansweredCount(container){
  return [...container.querySelectorAll(".quizQ")].filter(box=>![...box.querySelectorAll(".option")].some(b=>b.dataset.selected==="1")).length;
}
function revealAssessmentAnswers(items,container){
  container.dataset.submitted="1";
  container.querySelectorAll(".quizQ").forEach((box,qi)=>{
    const q=items[qi],selected=[...box.querySelectorAll(".option")].findIndex(b=>b.dataset.selected==="1");
    const correct=selected===q.a;
    box.querySelectorAll(".option").forEach((b,oi)=>{
      b.disabled=true;b.classList.remove("correct","wrong");
      if(oi===q.a)b.classList.add("correct");
      if(oi===selected&&!correct)b.classList.add("wrong");
    });
    let feedback=box.querySelector(".questionFeedback");
    if(!feedback){feedback=document.createElement("div");feedback.className="gameFeedback questionFeedback";box.appendChild(feedback)}
    feedback.className=`gameFeedback questionFeedback ${correct?"good":"bad"}`;
    feedback.innerHTML=correct?`<strong>Correct! 🎉</strong> ${q.options[q.a]}`:`<strong>Your answer was not correct.</strong> Correct answer: <strong>${q.options[q.a]}</strong>`;
    registerAnswerResult(correct,box);
  });
}
function scoreAssessment(items,container){
  let score=0;let topicHits={};let topicTotal={};
  container.querySelectorAll(".quizQ").forEach((box,qi)=>{
    const ans=items[qi].a,topic=items[qi].topic||items[qi].t||"General";
    topicTotal[topic]=(topicTotal[topic]||0)+1;
    box.querySelectorAll(".option").forEach((b,oi)=>{
      b.classList.remove("correct","wrong");
      if(oi===ans)b.classList.add("correct");
      if(b.dataset.selected==="1"&&oi!==ans)b.classList.add("wrong");
      if(b.dataset.selected==="1"&&oi===ans){score++;topicHits[topic]=(topicHits[topic]||0)+1}
    });
  });
  Object.keys(topicTotal).forEach(t=>{
    const pct=Math.round(((topicHits[t]||0)/topicTotal[t])*100);
    state.mastery[t]=Math.max(state.mastery[t]||0,pct);
  });
  return score;
}
scoreQuiz.onclick=()=>{
  if(quizContainer.dataset.submitted==="1"){playTone("soft");showReward("✅ Quiz already submitted","Use New Question Set or Shuffle Answers for another attempt.");return}
  const missing=unansweredCount(quizContainer);
  if(missing>0){
    quizResult.classList.remove("hidden");
    quizResult.innerHTML=`<strong>Almost there.</strong><p class="small">Answer all 5 questions before submitting. ${missing} ${missing===1?"question is":"questions are"} still unanswered. No answers were revealed.</p>`;
    playTone("soft");return;
  }
  const s=scoreAssessment(activeMiniQuiz,quizContainer);
  revealAssessmentAnswers(activeMiniQuiz,quizContainer);
  state.quizTaken=true;state.quizBest=Math.max(state.quizBest||0,s);addXP(s*5);
  let bonus="";
  if(s===5&&!state.quizPerfectRewarded){
    state.quizPerfectRewarded=true;addXP(25);bonus=`<div class="rewardBadge">🏅 Perfect Recall +25 XP</div>`;
  }
  quizResult.classList.remove("hidden");
  quizResult.innerHTML=`<div class="finishLine"><span class="finishFlag">${s===5?"🏆":s>=4?"🏁":"⭐"}</span><h3>${s}/5 correct</h3><p>${s===5?"Perfect mini-quiz! You crossed this checkpoint cleanly.":s>=4?"Strong recall. Review anything you missed, then keep moving.":"Checkpoint complete. Mistakes tell you exactly what to review."}</p>${bonus}</div>`;
  if(s===5){playTone("big");launchConfetti(130);showReward("🏆 Perfect mini quiz!",`5/5 correct${bonus?" • +25 bonus XP":""}`,true)}
  else if(s>=4){playTone("answer");launchConfetti(90);showReward("🏁 Mini quiz finished!",`${s}/5 correct • strong recall`)}
  else{playTone("win");launchConfetti(45);showReward("⭐ Checkpoint complete",`${s}/5 correct • now you know what to review`)}
  checkAchievements(true);checkFinalStudyMilestone();save();
};
scoreExam.onclick=()=>{
  if(examContainer.dataset.submitted==="1"){playTone("soft");showReward("✅ Practice exam already submitted","Use New Question Set or Shuffle Answers for another attempt.");return}
  const missing=unansweredCount(examContainer);
  if(missing>0){
    examResult.classList.remove("hidden");
    examResult.innerHTML=`<strong>Finish the exam first.</strong><p class="small">${missing} ${missing===1?"question is":"questions are"} still unanswered. Nothing has been graded or revealed.</p>`;
    playTone("soft");return;
  }
  const s=scoreAssessment(activeExam,examContainer),pct=Math.round(s/activeExam.length*100);
  revealAssessmentAnswers(activeExam,examContainer);
  state.examTaken=true;state.examBest=Math.max(state.examBest||0,pct);addXP(s*3);
  let bonus="";
  if(pct>=80&&!state.examReadyRewarded){
    state.examReadyRewarded=true;addXP(40);bonus=`<div class="rewardBadge">🥋 Practice Ready +40 XP</div>`;
  }
  examResult.classList.remove("hidden");
  examResult.innerHTML=`<div class="finishLine"><span class="finishFlag">${pct>=80?"🥋":"🏁"}</span><h3>${s}/${activeExam.length} — ${pct}%</h3><p>${pct>=80?"Practice target reached. Review missed questions before taking a real provider exam.":"Practice round complete. Review the questions marked wrong, then try a fresh set."}</p>${bonus}</div>`;
  if(pct>=80){playTone("big");launchConfetti(150);showReward("🥋 Practice target reached!",`${pct}%${bonus?" • +40 bonus XP":""}`,true)}
  else if(pct>=60){playTone("answer");launchConfetti(75);showReward("🏁 Practice exam submitted",`${pct}% • review and retry`)}
  else{playTone("soft");launchConfetti(35);showReward("⭐ Practice exam submitted",`${pct}% • misses show what to study next`)}
  checkAchievements(true);checkFinalStudyMilestone();save();
};

function renderDMAIC(i=0,remix=false){
  document.querySelectorAll(".dstep").forEach((b,bi)=>b.classList.toggle("active",bi===i));
  dmaicTitle.textContent=dmaic[i].title;dmaicPrompt.textContent=dmaic[i].prompt;dmaicOptions.innerHTML="";dmaicFeedback.classList.add("hidden");dmaicFeedback.innerHTML="";
  if(remix||!dmaicOptionOrders[i])dmaicOptionOrders[i]=shuffleArray(dmaic[i].opts.map((text,idx)=>({text,correct:idx===dmaic[i].a})));
  const order=dmaicOptionOrders[i];
  order.forEach((entry,oi)=>{
    const b=document.createElement("button");b.className="option";b.textContent=entry.text;b.dataset.correct=entry.correct?"1":"0";
    b.onclick=()=>{dmaicOptions.querySelectorAll(".option").forEach(x=>{x.dataset.selected="0";x.classList.remove("selected","correct","wrong")});b.dataset.selected="1";b.classList.add("selected");dmaicFeedback.classList.add("hidden");dmaicFeedback.innerHTML=""};dmaicOptions.appendChild(b);
  });
  const check=document.createElement("button");check.className="btn primary";check.type="button";check.textContent="Check answer";check.style.marginTop="12px";
  check.onclick=()=>{
    const opts=[...dmaicOptions.querySelectorAll(".option")],selected=opts.find(b=>b.dataset.selected==="1");
    if(!selected){dmaicFeedback.className="gameFeedback bad";dmaicFeedback.innerHTML="<strong>Pick an answer first.</strong> Then press Check answer.";return}
    const correct=selected.dataset.correct==="1";opts.forEach(b=>{b.classList.remove("correct","wrong");if(b.dataset.correct==="1")b.classList.add("correct");if(b===selected&&!correct)b.classList.add("wrong")});
    dmaicFeedback.className=`gameFeedback ${correct?"good":"bad"}`;dmaicFeedback.innerHTML=correct?`<strong>Correct! 🎉</strong> That belongs in ${dmaic[i].title}.`:`<strong>Not quite.</strong> The correct ${dmaic[i].title} choice is highlighted in green.`;
    if(correct&&!state.dmaicRewarded[i]){state.dmaicRewarded[i]=true;addXP(10)}registerAnswerResult(correct,check);if(correct){playTone("answer");launchConfetti(72)}else playTone("soft");checkAchievements(true);save();
  };
  dmaicOptions.appendChild(check);
  mixDmaic.onclick=()=>{dmaicOptionOrders[i]=null;renderDMAIC(i,true);playTone("soft");showReward("🔀 DMAIC answers mixed","The phase stayed the same; only the answer positions changed.")};
}
document.querySelectorAll(".dstep").forEach(b=>b.onclick=()=>renderDMAIC(+b.dataset.step));

function renderMastery(){
  if(!document.getElementById("masteryContainer"))return;
  const topics=["Process","Six Sigma","Value","Variation","Defects","Waste","DMAIC","Standard Work","White Belt"];
  masteryContainer.innerHTML="";
  topics.forEach(t=>{
    let v=state.mastery[t]||0;
    const d=document.createElement("div");d.className="card";
    d.innerHTML=`<strong>${t}</strong><p class="small">${v<40?"Needs review":v<75?"Building":"Strong"}</p><div class="meter"><div style="width:${v}%"></div></div><p class="small">${v}% mastery estimate</p>`;
    masteryContainer.appendChild(d);
  });
}

notesBox.oninput=()=>{state.notes=notesBox.value;save()};
clearNotes.onclick=()=>{notesBox.value="";state.notes="";save()};
document.querySelectorAll("[data-task]").forEach(cb=>{
  cb.checked=!!state.tasks[cb.dataset.task];
  cb.onchange=()=>{state.tasks[cb.dataset.task]=cb.checked;if(cb.checked)addXP(3);save()}
});
focusSwitch.onclick=e=>{e.currentTarget.classList.toggle("on");document.body.classList.toggle("focus")};
soundSwitch.classList.toggle("on",soundsEnabled());
// Soft UI click for every real button. Capture phase makes the click happen
// before any larger quiz/lesson reward sound.
document.addEventListener("click",e=>{
  const button=e.target.closest&&e.target.closest("button");
  if(button&&!button.disabled)playClick();
},true);

soundSwitch.onclick=e=>{
  state.sounds=!soundsEnabled();
  e.currentTarget.classList.toggle("on",soundsEnabled());
  if(soundsEnabled()){playTone("soft");showReward("🔊 Sound effects on","Tiny chimes will play for study wins.")}
  else showReward("🔇 Sound effects off","Your rewards still work silently.");
  save();
};
resetBtn.onclick=()=>{
  if(confirm("Reset all saved study progress, XP, notes, and mastery?")){
    localStorage.removeItem("sigmaStateV2");
    state={done:[],current:0,xp:0,quizBest:0,examBest:0,mastery:{},lastStudy:null,streak:0,notes:"",tasks:{},sounds:true,lessonFinishRewarded:false,quizPerfectRewarded:false,examReadyRewarded:false,dmaicRewarded:{},achievements:[],bestCombo:0,finalStudyRewarded:false,quizTaken:false,examTaken:false,standardQuizRewarded:false};answerCombo=0;dmaicComboCounted={};sessionStartXP=0;sessionCorrect=0;sessionLessons=0;sessionBonusGranted=false;
    current=0;notesBox.value="";document.querySelectorAll("[data-task]").forEach(x=>x.checked=false);activeMiniQuiz=buildAssessmentRound(miniQuizBank,5);activeExam=buildAssessmentRound(whiteBeltQuestionBank,15);renderAssessment(activeMiniQuiz,quizContainer,"deferred");renderAssessment(activeExam,examContainer,"deferred");quizResult.classList.add("hidden");examResult.classList.add("hidden");save();renderLesson()
  }
};

activeMiniQuiz=buildAssessmentRound(miniQuizBank,5);activeExam=buildAssessmentRound(whiteBeltQuestionBank,15);
renderAssessment(activeMiniQuiz,quizContainer,"deferred");
renderAssessment(activeExam,examContainer,"deferred");
mixQuiz.onclick=()=>{activeMiniQuiz=buildAssessmentRound(miniQuizBank,5);answerCombo=0;renderAssessment(activeMiniQuiz,quizContainer,"deferred");quizResult.classList.add("hidden");playTone("soft");showReward("🔀 Fresh Mini Quiz round","New questions + new believable answer choices.")};
shuffleQuizAnswers.onclick=()=>{activeMiniQuiz=shuffleAnswersOnly(activeMiniQuiz);answerCombo=0;renderAssessment(activeMiniQuiz,quizContainer,"deferred");quizResult.classList.add("hidden");playTone("soft");showReward("🔁 Answers shuffled","Same five questions, but the answer positions moved.")};
mixExam.onclick=()=>{activeExam=buildAssessmentRound(whiteBeltQuestionBank,15);answerCombo=0;renderAssessment(activeExam,examContainer,"deferred");examResult.classList.add("hidden");playTone("soft");showReward("🔀 Fresh Practice Exam","A new 15-question set with different answer choices.")};
shuffleExamAnswers.onclick=()=>{activeExam=shuffleAnswersOnly(activeExam);answerCombo=0;renderAssessment(activeExam,examContainer,"deferred");examResult.classList.add("hidden");playTone("soft");showReward("🔁 Practice answers shuffled","Same 15 questions, but the answer positions moved.")};
renderCard();renderDMAIC(0);notesBox.value=state.notes||"";checkAchievements(false);updateUI();renderLesson();

const arcadeQuestions=[
 {cat:"🧠 Vocabulary",q:"In Six Sigma, what is a defect?",a:["A result that does not meet a requirement","Any employee mistake","A complicated equation"],c:0,why:"A defect is an output that fails to meet a requirement or customer need.",topic:"Defects"},
 {cat:"📊 Read the graph",q:"Which problem happens most often?",a:["Wrong tire","Loose lug","Wrong pressure"],c:2,why:"Wrong pressure has 8 defects, so it is the tallest bar.",topic:"Defects",visual:"bars"},
 {cat:"🔢 Mini statistics",q:"Service times are 4, 6, and 8 minutes. What is the mean (average)?",a:["5 minutes","6 minutes","8 minutes"],c:1,why:"4 + 6 + 8 = 18. Then 18 ÷ 3 = 6 minutes.",topic:"Variation",visual:"mean"},
 {cat:"⚙️ Process",q:"Which best describes a process?",a:["A sequence of steps that produces an output","A single random event","Only a factory machine"],c:0,why:"A process is a sequence of connected steps that transforms inputs into an output.",topic:"Process",visual:"process"},
 {cat:"🧠 Vocabulary",q:"What does variation mean?",a:["Every result is identical","Differences in process results","The number of customers"],c:1,why:"Variation means process results differ. Six Sigma tries to understand and reduce harmful variation.",topic:"Variation"},
 {cat:"📊 Pareto thinking",q:"There are 10 pressure defects, 4 scratches, and 2 wrong tires. Which problem stands out first?",a:["Pressure defects","Scratches","Wrong tires"],c:0,why:"Pressure defects occur most often, so they are an obvious first place to investigate.",topic:"Defects",visual:"pareto"},
 {cat:"⚙️ Process order",q:"Which order makes the most sense for tire service?",a:["Inspect → Service → Quality check","Quality check → Service → Inspect","Service → Customer arrives → Inspect"],c:0,why:"You inspect first, perform the service, then verify the work.",topic:"Process",visual:"process"},
 {cat:"🔢 Spot variation",q:"Which set shows MORE variation?",a:["29, 30, 31 minutes","15, 30, 55 minutes","30, 30, 30 minutes"],c:1,why:"15, 30, and 55 are spread much farther apart, so the results vary more.",topic:"Variation"},
 {cat:"🧠 White Belt",q:"What is the main purpose of Six Sigma?",a:["Make processes more complicated","Reduce defects and unwanted variation","Memorize statistics formulas"],c:1,why:"Six Sigma uses data and structured improvement to make processes more reliable.",topic:"Six Sigma"},
 {cat:"📊 Read the data",q:"Wait times are 30, 31, 29, and 90 minutes. What should catch your attention?",a:["The 90-minute wait is unusually high","All four are basically the same","The 29-minute wait must be a defect"],c:0,why:"Most results cluster near 30 minutes, while 90 minutes is very different and deserves investigation.",topic:"Variation"}
];
let activeArcadeQuestions=arcadeQuestions.map(q=>({...q,a:[...q.a]}));let gameIndex=0,gameScoreValue=0,gameStreakValue=0,gameLocked=false;
function gameVisualHTML(type){
 if(type==="bars")return `<div class="gameVisual"><div class="miniBarWrap"><div class="miniBar" style="height:42px"></div><div class="miniLabel">Wrong tire<br>2</div></div><div class="miniBarWrap"><div class="miniBar" style="height:70px"></div><div class="miniLabel">Loose lug<br>4</div></div><div class="miniBarWrap"><div class="miniBar" style="height:112px"></div><div class="miniLabel">Wrong pressure<br>8</div></div></div>`;
 if(type==="pareto")return `<div class="gameVisual"><div class="miniBarWrap"><div class="miniBar" style="height:120px"></div><div class="miniLabel">Pressure<br>10</div></div><div class="miniBarWrap"><div class="miniBar" style="height:55px"></div><div class="miniLabel">Scratches<br>4</div></div><div class="miniBarWrap"><div class="miniBar" style="height:28px"></div><div class="miniLabel">Wrong tire<br>2</div></div></div>`;
 if(type==="mean")return `<div class="formulaBox">4 + 6 + 8 = 18 &nbsp; → &nbsp; 18 ÷ 3 = ?</div>`;
 if(type==="process")return `<div class="processRow"><span class="processStep">Inspect</span><span class="processArrow">→</span><span class="processStep">Service</span><span class="processArrow">→</span><span class="processStep">Quality check</span></div>`;
 return "";
}
function renderArcade(){
 const q=activeArcadeQuestions[gameIndex];gameLocked=false;
 gameScore.textContent=gameScoreValue;gameStreak.textContent=gameStreakValue;gameProgress.textContent=`${gameIndex+1}/${activeArcadeQuestions.length}`;
 gameCategory.textContent=q.cat;gameQuestion.textContent=q.q;gameVisual.innerHTML=gameVisualHTML(q.visual);gameAnswers.innerHTML="";gameFeedback.className="gameFeedback hidden";gameNext.classList.add("hidden");gameCheck.classList.remove("hidden");
 q.a.forEach((txt,i)=>{const b=document.createElement("button");b.className="option";b.textContent=txt;b.onclick=()=>{if(gameLocked)return;gameAnswers.querySelectorAll(".option").forEach(x=>{x.dataset.selected="0";x.classList.remove("selected","correct","wrong")});b.dataset.selected="1";b.classList.add("selected");gameFeedback.className="gameFeedback hidden"};gameAnswers.appendChild(b)});
}
function checkArcadeAnswer(){
 if(gameLocked)return;
 const selected=[...gameAnswers.querySelectorAll(".option")].findIndex(b=>b.dataset.selected==="1");
 if(selected<0){gameFeedback.className="gameFeedback bad";gameFeedback.innerHTML="<strong>Pick an answer first.</strong> Then press Check answer.";return}
 gameLocked=true;const q=activeArcadeQuestions[gameIndex];const correct=selected===q.c;
 gameAnswers.querySelectorAll(".option").forEach((x,xi)=>{x.disabled=true;x.classList.remove("correct","wrong");if(xi===q.c)x.classList.add("correct");else if(xi===selected)x.classList.add("wrong")});
 if(correct){gameScoreValue+=10;gameStreakValue++;state.mastery[q.topic]=Math.max(state.mastery[q.topic]||0,Math.min(95,55+gameStreakValue*5));addXP(4);playTone("answer");launchConfetti(65)}else{gameStreakValue=0;playTone("soft")}
 gameScore.textContent=gameScoreValue;gameStreak.textContent=gameStreakValue;
 gameFeedback.className="gameFeedback "+(correct?"good":"bad");gameFeedback.innerHTML=`<strong>${correct?"✅ Correct!":"💡 Not quite."}</strong><p>${q.why}</p>`;gameCheck.classList.add("hidden");gameNext.classList.remove("hidden");save();
}
gameCheck.onclick=checkArcadeAnswer;
gameNext.onclick=()=>{if(gameIndex<activeArcadeQuestions.length-1){gameIndex++;renderArcade()}else{gameFeedback.className="gameFeedback good gameFinish";gameFeedback.innerHTML=`<h3>🥋 Round complete!</h3><p>You scored <strong>${gameScoreValue}/${activeArcadeQuestions.length*10}</strong>. Every miss is a clue for what to review next.</p>`;gameNext.classList.add("hidden");gameCheck.classList.add("hidden");state.mastery["White Belt"]=Math.max(state.mastery["White Belt"]||0,Math.round(gameScoreValue/(activeArcadeQuestions.length*10)*100));playTone("big");showReward("🎮 Arcade round complete!",`${gameScoreValue}/${activeArcadeQuestions.length*10} points`,true);save()}};
gameShuffleAnswers.onclick=()=>{if(gameLocked){playTone("soft");showReward("Answer already checked","Go to the next challenge before shuffling this one.");return}const q=activeArcadeQuestions[gameIndex];const correct=q.a[q.c],answers=shuffleArray(q.a);activeArcadeQuestions[gameIndex]={...q,a:answers,c:answers.indexOf(correct)};renderArcade();playTone("soft");showReward("🔁 Arcade answers shuffled","Same challenge, different answer positions.")};
gameShuffle.onclick=()=>{activeArcadeQuestions=shuffleArray(arcadeQuestions.map(q=>{const correct=q.a[q.c],answers=shuffleArray(q.a);return{...q,a:answers,c:answers.indexOf(correct)}}));gameIndex=0;gameScoreValue=0;gameStreakValue=0;renderArcade();playTone("soft");showReward("🔀 Arcade shuffled","Fresh challenge order + fresh answer positions.")};
gameRestart.onclick=()=>{gameIndex=0;gameScoreValue=0;gameStreakValue=0;renderArcade()};
renderArcade();

// Standard Work & Checklists practice
const standardChecks=[...document.querySelectorAll('[data-std]')];
standardCheckBtn.onclick=()=>{
  const checked=standardChecks.filter(x=>x.checked).length;
  standardCheckFeedback.classList.remove('hidden','good','bad');
  if(checked===standardChecks.length){
    standardCheckFeedback.classList.add('good');
    standardCheckFeedback.innerHTML='<strong>✅ Checklist complete.</strong><p>You used a documented sequence instead of relying only on memory. That is the habit this lesson is teaching.</p>';
    state.mastery['Standard Work']=Math.max(state.mastery['Standard Work']||0,70);addXP(5);
  }else{
    standardCheckFeedback.classList.add('bad');
    standardCheckFeedback.innerHTML=`<strong>Keep going.</strong><p>You completed ${checked} of ${standardChecks.length} steps. A checklist only protects the process when the critical items are actually confirmed.</p>`;
  }
};
standardResetBtn.onclick=()=>{standardChecks.forEach(x=>x.checked=false);standardCheckFeedback.className='standardFeedback hidden'};
const standardQuiz=document.getElementById("standardQuiz");
function bindStandardQuizOptions(){
  standardQuiz.querySelectorAll(".option").forEach(b=>b.onclick=()=>{
    standardQuiz.querySelectorAll(".option").forEach(x=>{x.dataset.selected="0";x.classList.remove("selected","correct","wrong")});
    b.dataset.selected="1";b.classList.add("selected");standardQuizFeedback.className="standardFeedback hidden";
  });
}
bindStandardQuizOptions();
standardQuizCheck.onclick=()=>{
  const opts=[...standardQuiz.querySelectorAll(".option")],selected=opts.find(b=>b.dataset.selected==="1");
  if(!selected){standardQuizFeedback.className="standardFeedback bad";standardQuizFeedback.innerHTML='<strong>Pick an answer first.</strong><p>Then press Check answer.</p>';return}
  const correct=selected.dataset.stdCorrect==="1";
  opts.forEach(b=>{b.classList.remove("correct","wrong");if(b.dataset.stdCorrect==="1")b.classList.add("correct");if(b===selected&&!correct)b.classList.add("wrong")});
  standardQuizFeedback.classList.remove("hidden","good","bad");
  if(correct){standardQuizFeedback.classList.add("good");standardQuizFeedback.innerHTML='<strong>✅ Correct.</strong><p>The checklist is the quick execution aid. The reference manual/standard procedure gives the deeper instructions behind it.</p>';state.mastery['Standard Work']=Math.max(state.mastery['Standard Work']||0,85);if(!state.standardQuizRewarded){state.standardQuizRewarded=true;addXP(5)}playTone("answer");launchConfetti(55)}
  else{standardQuizFeedback.classList.add("bad");standardQuizFeedback.innerHTML='<strong>Not quite.</strong><p>When a process has many critical steps, a checklist helps you verify the steps while the reference manual provides the full detail.</p>';playTone("soft")}
  save();
};
standardQuizShuffle.onclick=()=>{
  const opts=shuffleArray([...standardQuiz.querySelectorAll(".option")]);
  opts.forEach(b=>{b.dataset.selected="0";b.classList.remove("selected","correct","wrong");standardQuiz.appendChild(b)});
  bindStandardQuizOptions();standardQuizFeedback.className="standardFeedback hidden";playTone("soft");showReward("🔁 Answers shuffled","Same mini challenge, new answer positions.");
};



// Standard Work Rush — playable process-board game
const jumpToStandardGame=document.getElementById("jumpToStandardGame");
if(jumpToStandardGame) jumpToStandardGame.onclick=()=>document.getElementById("standardWorkGame").scrollIntoView({behavior:"smooth",block:"start"});

const standardGameScenarios=[
  {
    title:"🚗 Tire Service Board",intro:"Follow a repeatable service process without skipping critical checks.",
    steps:[
      {short:"Verify job",icon:"🧾",label:"Verify the correct vehicle and requested service",correct:"Confirm the vehicle, work order, and requested service before beginning.",wrong:["Start removing parts immediately and check the work order later.","Ask someone else what they think the customer wanted."]},
      {short:"Inspect",icon:"🔎",label:"Inspect before service",correct:"Inspect the tire and wheel for obvious issues before changing anything.",wrong:["Skip inspection because this looks like a routine job.","Change the service steps based only on how busy the shop is."]},
      {short:"Do to standard",icon:"🛠️",label:"Perform the service to specification",correct:"Follow the documented service method and required specifications.",wrong:["Use a familiar guess instead of the documented specification.","Do whichever steps are easiest and skip the rest."]},
      {short:"Quality check",icon:"✅",label:"Perform a final quality check",correct:"Verify the completed work before the vehicle is released.",wrong:["Assume it is correct because the process usually works.","Return the vehicle immediately after the service step is finished."]},
      {short:"Record",icon:"📝",label:"Document completion",correct:"Record that the required work and final check were completed.",wrong:["Keep the result in memory instead of recording it.","Throw away the work information as soon as the service is done."]}
    ]
  },
  {
    title:"🧪 Lab Sample Intake Board",intro:"Protect sample identity and consistency by following the same receiving process every time.",
    steps:[
      {short:"Verify ID",icon:"🏷️",label:"Verify the sample and request",correct:"Match the sample identification to the request before processing it.",wrong:["Assume the sample is correct because it arrived in the right room.","Process the sample first and identify it later."]},
      {short:"Inspect",icon:"🔎",label:"Inspect sample condition",correct:"Check the container and sample condition using the receiving procedure.",wrong:["Skip the condition check if the container looks mostly fine.","Open every sample before reading the handling instructions."]},
      {short:"Handle to SOP",icon:"🧤",label:"Follow the handling procedure",correct:"Handle the sample according to the documented receiving and safety steps.",wrong:["Use whatever handling method feels fastest today.","Rely only on memory when the procedure is available."]},
      {short:"Record",icon:"💻",label:"Record required information",correct:"Enter the required sample information in the designated record or system.",wrong:["Write the information on a loose note and enter it someday.","Skip documentation because the sample label already exists."]},
      {short:"Handoff",icon:"📦",label:"Complete the correct handoff",correct:"Place or route the sample to the correct labeled location and confirm the handoff.",wrong:["Leave the sample wherever there is open space.","Send the sample forward without confirming its destination."]}
    ]
  },
  {
    title:"🥫 Food Quality Check Board",intro:"Use standard work so every batch gets the same critical quality checks.",
    steps:[
      {short:"Verify batch",icon:"🏷️",label:"Verify batch or lot identity",correct:"Confirm the correct batch or lot before performing quality checks.",wrong:["Use the nearest batch because the products look the same.","Do the check first and figure out the batch number afterward."]},
      {short:"Sample",icon:"🥄",label:"Follow the sampling method",correct:"Take the sample using the documented sampling method.",wrong:["Take a sample from whichever spot is easiest to reach.","Change the sample amount each time without a reason."]},
      {short:"Test to SOP",icon:"🧪",label:"Perform the required checks",correct:"Perform the required check using the documented method and criteria.",wrong:["Use a different method each time to keep the work interesting.","Skip a required check when the batch looks normal."]},
      {short:"Record",icon:"📝",label:"Record the result",correct:"Record the result clearly when the check is performed.",wrong:["Wait until the end of the week and fill results in from memory.","Only record results that fail."]},
      {short:"Route result",icon:"✅",label:"Follow the pass/fail procedure",correct:"Use the documented pass/fail or escalation procedure for the result.",wrong:["Ignore a failed result if production is busy.","Make up a new response each time a result is outside the requirement."]}
    ]
  }
];
let stdScenarioIndex=0,stdGamePos=0,stdGameScoreValue=0,stdGameRiskValue=0,stdStepMistakes=0,stdSelectedAction=null;
const stdBoardEl=document.getElementById("stdBoard"),stdActionList=document.getElementById("stdActionList"),stdLiveList=document.getElementById("stdLiveList"),stdGameMessage=document.getElementById("stdGameMessage");
function currentStdScenario(){return standardGameScenarios[stdScenarioIndex]}
function shuffledStdActions(step){return shuffleArray([{text:step.correct,correct:true},...step.wrong.map(text=>({text,correct:false}))])}
let stdActionOrder=[];
function renderStdBoard(){
  const sc=currentStdScenario();stdBoardEl.innerHTML="";
  const nodes=[{short:"START",icon:"🚦"},...sc.steps.map(x=>({short:x.short,icon:x.icon})),{short:"FINISH",icon:"🏁",finish:true}];
  nodes.forEach((n,i)=>{
    const d=document.createElement("div");d.className="stdSquare"+(i<stdGamePos?" done":"")+(i===stdGamePos?" current":"")+(n.finish?" finish":"")+(n.finish&&stdGamePos>=sc.steps.length+1?" done":"");
    if(i===stdGamePos){const token=document.createElement("span");token.className="stdToken";token.textContent="👷";d.appendChild(token)}
    d.insertAdjacentHTML("beforeend",`<div class="stdSquareNum">${i===0?"Start":n.finish?"Finish":`Station ${i}`}</div><div class="stdSquareIcon">${n.icon}</div><div class="stdSquareLabel">${n.short}</div>`);stdBoardEl.appendChild(d);
  });
}
function renderStdChecklist(){
  const sc=currentStdScenario();stdLiveList.innerHTML="";
  sc.steps.forEach((step,i)=>{const d=document.createElement("div");d.className="stdLiveItem"+(i<stdGamePos?" done":"");d.innerHTML=`<span class="stdLiveCheck">${i<stdGamePos?"✓":""}</span><div><strong>${i+1}. ${step.label}</strong></div>`;stdLiveList.appendChild(d)});
}
function updateStdRisk(){document.getElementById("stdGameRisk").textContent=stdGameRiskValue;document.getElementById("stdRiskFill").style.width=`${Math.min(100,stdGameRiskValue*25)}%`}
function renderStdChallenge(newOrder=true){
  const sc=currentStdScenario();document.getElementById("stdScenarioTitle").textContent=sc.title;document.getElementById("stdScenarioIntro").textContent=sc.intro;document.getElementById("stdGameScore").textContent=stdGameScoreValue;document.getElementById("stdGameStep").textContent=`${Math.min(stdGamePos,sc.steps.length)}/${sc.steps.length}`;updateStdRisk();renderStdBoard();renderStdChecklist();stdSelectedAction=null;
  if(stdGamePos>=sc.steps.length){
    stdGamePos=sc.steps.length+1;renderStdBoard();document.getElementById("stdStationLabel").textContent="Process complete";document.getElementById("stdChallengePrompt").textContent="🏁 Standard process completed!";stdActionList.innerHTML="";document.getElementById("stdDoStep").classList.add("hidden");stdGameMessage.className="stdGameMessage finish";stdGameMessage.innerHTML=`<strong>Checklist complete — ${stdGameScoreValue} points</strong><p>You followed the documented sequence instead of relying on memory. That is standard work in action.</p><p class="small">Defect risk mistakes this run: ${stdGameRiskValue}</p>`;state.mastery['Standard Work']=Math.max(state.mastery['Standard Work']||0,90);if(!state.standardGameRewarded){state.standardGameRewarded=true;addXP(15);showReward("🎲 Standard Work Rush cleared!","+15 XP — you completed a full standard process board.",true)}playTone("big");launchConfetti(90);save();return;
  }
  document.getElementById("stdDoStep").classList.remove("hidden");stdGameMessage.className="stdGameMessage hidden";const step=sc.steps[stdGamePos];document.getElementById("stdStationLabel").textContent=`Station ${stdGamePos+1} of ${sc.steps.length} · ${step.short}`;document.getElementById("stdChallengePrompt").textContent="Check the action that should happen next.";if(newOrder||!stdActionOrder.length)stdActionOrder=shuffledStdActions(step);stdActionList.innerHTML="";
  stdActionOrder.forEach((action,i)=>{const label=document.createElement("label");label.className="stdAction";label.innerHTML=`<input type="checkbox" data-std-game-action="${i}"><span>${action.text}</span>`;label.onclick=e=>{if(e.target.tagName!=="INPUT")label.querySelector("input").checked=true;stdActionList.querySelectorAll("input").forEach((x,j)=>{x.checked=j===i});stdActionList.querySelectorAll(".stdAction").forEach((x,j)=>x.classList.toggle("selected",j===i));stdSelectedAction=i;stdGameMessage.className="stdGameMessage hidden"};stdActionList.appendChild(label)});
}
function resetStdGame(chooseNew=false){if(chooseNew)stdScenarioIndex=(stdScenarioIndex+1+Math.floor(Math.random()*(standardGameScenarios.length-1)))%standardGameScenarios.length;stdGamePos=0;stdGameScoreValue=0;stdGameRiskValue=0;stdStepMistakes=0;stdSelectedAction=null;stdActionOrder=[];renderStdChallenge(true)}
document.getElementById("stdDoStep").onclick=()=>{
  if(stdSelectedAction===null){stdGameMessage.className="stdGameMessage bad";stdGameMessage.innerHTML="<strong>Check one action first.</strong><p>Pick the step you would actually perform, then run it.</p>";playTone("soft");return}
  const action=stdActionOrder[stdSelectedAction],cards=[...stdActionList.querySelectorAll(".stdAction")];cards.forEach((c,i)=>{c.classList.remove("correct","wrong");if(i===stdSelectedAction)c.classList.add(action.correct?"correct":"wrong")});
  if(action.correct){const earned=Math.max(5,20-stdStepMistakes*5);stdGameScoreValue+=earned;stdGameMessage.className="stdGameMessage good";stdGameMessage.innerHTML=`<strong>✅ Correct — +${earned} points.</strong><p>You followed the standard step. The checklist can now confirm it was completed.</p>`;playTone("answer");launchConfetti(28);setTimeout(()=>{stdGamePos++;stdStepMistakes=0;stdActionOrder=[];renderStdChallenge(true)},520)}
  else{stdGameRiskValue++;stdStepMistakes++;updateStdRisk();stdGameMessage.className="stdGameMessage bad";stdGameMessage.innerHTML="<strong>⚠️ Defect risk increased.</strong><p>That choice skips or changes the standard method. Try another checked action — the board will not move until the critical step is completed.</p>";playTone("soft")}
};
document.getElementById("stdRestartGame").onclick=()=>{resetStdGame(false);playTone("soft");showReward("↻ Board restarted","Same scenario, fresh process run.")};
document.getElementById("stdNewScenario").onclick=()=>{resetStdGame(true);playTone("soft");showReward("🔀 New process board",currentStdScenario().title)};
state.standardGameRewarded=!!state.standardGameRewarded;
renderStdChallenge(true);



// Retro arcade music (click to start due to browser autoplay rules)
let retroAudioCtx=null, retroMusicOn=false, retroScheduler=null, retroNextNoteTime=0, retroCurrentStep=0;
const retroBpm=142;
const retroStepDur=60/retroBpm/4; // 16th notes
const retroFreq={C2:65.41,D2:73.42,E2:82.41,F2:87.31,G2:98.00,A2:110.00,B2:123.47,C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196.00,A3:220.00,B3:246.94,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392.00,A4:440.00,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880.00};

const retroLeadA=['E5',null,'G5',null,'A5',null,'G5',null,'E5',null,'D5',null,'E5',null,'G5',null,
                  'A5',null,'G5',null,'E5',null,'D5',null,'C5',null,'D5',null,'E5',null,'G5',null];
const retroLeadB=['G5',null,'A5',null,'B5',null,'A5',null,'G5',null,'E5',null,'D5',null,'E5',null,
                  'G5',null,'A5',null,'G5',null,'E5',null,'D5',null,'C5',null,'D5',null,'E5',null];
const retroLeadC=['E5','G5','A5',null,'G5',null,'E5',null,'D5',null,'C5',null,'D5',null,'E5',null,
                  'G5',null,'E5',null,'D5',null,'C5',null,'A4',null,'C5',null,'D5',null,'E5',null];
const retroLeadD=['A5',null,'G5',null,'E5',null,'G5',null,'A5',null,'B5',null,'A5',null,'G5',null,
                  'E5',null,'D5',null,'C5',null,'D5',null,'E5',null,'G5',null,'E5',null,'C5',null];
const retroLeadSong=[...retroLeadA,...retroLeadB,...retroLeadC,...retroLeadD];

const retroBassA=['C3',null,null,'C3',null,null,'C3',null,'A2',null,null,'A2',null,null,'A2',null,
                  'F2',null,null,'F2',null,null,'F2',null,'G2',null,null,'G2',null,null,'G2',null];
const retroBassB=['C3',null,'G2',null,'C3',null,'G2',null,'A2',null,'E2',null,'A2',null,'E2',null,
                  'F2',null,'C3',null,'F2',null,'C3',null,'G2',null,'D3',null,'G2',null,'D3',null];
const retroBassSong=[...retroBassA,...retroBassB,...retroBassA,...retroBassB];

const retroChordBars=[['C4','E4','G4'],['A3','C4','E4'],['F3','A3','C4'],['G3','B3','D4'],
                      ['C4','E4','G4'],['A3','C4','E4'],['F3','A3','C4'],['G3','B3','D4'],
                      ['C4','E4','G4'],['F3','A3','C4'],['D3','F3','A3'],['G3','B3','D4'],
                      ['A3','C4','E4'],['F3','A3','C4'],['G3','B3','D4'],['C4','E4','G4']];

function chipEnv(gain, when, attack, peak, release){
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(peak, when + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + release);
}
function playChipTone(name, when, duration=0.14, type='square', volume=0.03){
  if(!retroAudioCtx || !retroFreq[name]) return;
  const osc=retroAudioCtx.createOscillator();
  const gain=retroAudioCtx.createGain();
  const filter=retroAudioCtx.createBiquadFilter();
  filter.type='lowpass';
  filter.frequency.value = type==='triangle' ? 1500 : 2800;
  osc.type=type;
  osc.frequency.setValueAtTime(retroFreq[name], when);
  chipEnv(gain, when, 0.004, volume, duration);
  osc.connect(filter).connect(gain).connect(retroAudioCtx.destination);
  osc.start(when); osc.stop(when + duration + 0.03);
}
function playNoise(when, duration=0.035, volume=0.012, highpass=1500){
  if(!retroAudioCtx) return;
  const buffer=retroAudioCtx.createBuffer(1, Math.max(1, retroAudioCtx.sampleRate * duration), retroAudioCtx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*(1-i/data.length);
  const src=retroAudioCtx.createBufferSource(); src.buffer=buffer;
  const filter=retroAudioCtx.createBiquadFilter(); filter.type='highpass'; filter.frequency.value=highpass;
  const gain=retroAudioCtx.createGain(); chipEnv(gain, when, 0.001, volume, duration);
  src.connect(filter).connect(gain).connect(retroAudioCtx.destination);
  src.start(when); src.stop(when+duration+0.02);
}
function scheduleRetroStep(step, when){
  const lead=retroLeadSong[step % retroLeadSong.length];
  const bass=retroBassSong[step % retroBassSong.length];
  const chord=retroChordBars[Math.floor((step % 128)/8) % retroChordBars.length];
  const arpIndex=Math.floor(step/2)%3;
  if(lead) playChipTone(lead, when, 0.13, 'square', 0.032);
  if(bass) playChipTone(bass, when, 0.18, 'triangle', 0.026);
  if(step % 2 === 0) playChipTone(chord[arpIndex], when, 0.09, 'square', 0.014);
  if(step % 4 === 0) playNoise(when, 0.045, 0.02, 1000); // kick-ish thump/noise accent
  if(step % 8 === 4) playNoise(when, 0.05, 0.016, 1800); // snare-ish accent
  if(step % 2 === 1) playNoise(when, 0.025, 0.007, 5000); // hat
}
function retroSchedulerTick(){
  if(!retroMusicOn || !retroAudioCtx) return;
  while(retroNextNoteTime < retroAudioCtx.currentTime + 0.22){
    scheduleRetroStep(retroCurrentStep, retroNextNoteTime);
    retroNextNoteTime += retroStepDur;
    retroCurrentStep = (retroCurrentStep + 1) % retroLeadSong.length;
  }
}
function startRetroMusic(){
  if(!retroAudioCtx) retroAudioCtx=new (window.AudioContext||window.webkitAudioContext)();
  if(retroAudioCtx.state==='suspended') retroAudioCtx.resume();
  retroMusicOn=true;
  retroNextNoteTime=retroAudioCtx.currentTime + 0.05;
  if(retroScheduler) clearInterval(retroScheduler);
  retroScheduler=setInterval(retroSchedulerTick, 55);
}
function stopRetroMusic(){
  retroMusicOn=false;
  if(retroScheduler){clearInterval(retroScheduler); retroScheduler=null;}
}
const retroMusicBtn=document.getElementById('retroMusicBtn');
if(retroMusicBtn){
  retroMusicBtn.onclick=()=>{
    if(!retroMusicOn){startRetroMusic(); retroMusicBtn.textContent='⏸ Pause Retro Music'; showReward('🎵 Retro music started','Now using a fuller chiptune loop with melody, bass, and arcade percussion.');}
    else{stopRetroMusic(); retroMusicBtn.textContent='▶ Start Retro Music'; showReward('🔇 Retro music paused','You can start it again anytime.');}
  };
}



// Optional tip jar. Paste the owner's real HTTPS payment link here when connected.
const SUPPORT_PAYMENT_URL = "";
function safePaymentUrl(raw){
  if(!raw) return null;
  try{
    const u=new URL(raw);
    const host=u.hostname.toLowerCase();
    const allowedHosts=[
      "buy.stripe.com","checkout.stripe.com",
      "paypal.me","www.paypal.com","paypal.com",
      "cash.app","venmo.com","www.venmo.com",
      "ko-fi.com","www.ko-fi.com",
      "buymeacoffee.com","www.buymeacoffee.com"
    ];
    if(u.protocol!=="https:" || !allowedHosts.includes(host)) return null;
    return u.href;
  }catch(_){
    return null;
  }
}

document.querySelectorAll('.tipBtn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const amount=btn.dataset.tip;
    const safeUrl=safePaymentUrl(SUPPORT_PAYMENT_URL);
    if(safeUrl){
      const opened=window.open(safeUrl,'_blank','noopener,noreferrer');
      if(opened) opened.opener=null;
    }else{
      const box=document.getElementById('tipStatus');
      if(box){box.innerHTML='<strong>💜 Tip jar is ready for a secure payment link.</strong><div class="small" style="margin-top:5px">The payout destination is not connected yet. Only an HTTPS payment link will be accepted.</div>';}
      showReward(`💜 $${amount} support option ready`,'Secure payment destination still needs to be connected.');
    }
  });
});

