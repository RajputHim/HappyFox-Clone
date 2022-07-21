var obj={
    heading:["","Mighty","Fantastic","Enterprise","Enterprise Plus"],
    title:"TICKET MANAGEMENT",
    }
var cont={cust_mang:["Unlimited Contacts","Import Contacts","Contact Custom Fields","Unlimited Contact Groups","Contact Group Custom Fields"],
Help_desk_Automation:['Smart Rule Automation',
'Canned Actions (Macros)',
'Ticket Templates',
'Automatic Time Tracking',
'SLA management',
'SLA Breach Notification',
'Round Robin Ticket Assignment',
'Round Robin Ticket Assignment on Active Agents',
'Load Balanced Ticket Assignment',
'Scheduled Tickets',
'Agent Scripting'],Supt_Center:[
'Self-Service Knowledge Base',
'Internal Knowledge Base',
'Knowledge Base Notifications',
'Support Portal Builder',
'SEO optimization for Knowledge Base',
'Knowledge base Drafts',
'Automatic Sitemap Generation',
'Multilingual Knowledge Base',
'Code Editor for Support Center',
'Multi-brand Help Desk with SSL Support #',
'Multi-branding with Custom Domain',
'Contact Group Specific Knowledge Base'],
    z:[
        'Unlimited Mailboxe',
        'Unlimited Categories',
        'Unlimited Tickets',
        'Customizable Statuses',
        'Customizable Priorities',
        'Ticket Custom Fields',
        'Custom Domain Mapping',
        'Multilingual Agent Portal',
        'Agent Collision',
        'Work Schedules',
        'Custom Roles and Permissions',
        'Satisfaction Surveys',
        'Custom Ticket Queues',
        'Kanban view of tickets',
        'Proactive Agent Collision',
        'Task Management',
        'Asset Management',
        'Unlimited Assets',
        'Sentiment Analysis',
        'Attachment Store',
        'Lite Agents *'],
    values:[1,1,1,1]
}
var toAdd=document.getElementById("header")
var tocont=document.getElementById("content")
var count=0;
var to_cust_mang=document.getElementById("content_1")
var to_help_desk=document.getElementById("content_2")
var to_Supt_center=document.getElementById("content_3")

function heading(){
    for(key in obj.heading){
        var d=document.createElement("div")
        d.textContent=obj.heading[key]
        toAdd.appendChild(d)
    }
}

function first(){
    count=0
    for(var i=0;i<cont.z.length;i++){
        var d=document.createElement("div")
        var p=document.createElement("p")
        p.textContent=cont.z[i]
        d.appendChild(p)
        p.setAttribute("class","title")
        for(var j=0;j<cont.values.length;j++){
            count++
            var div=document.createElement("p")
            // div.textContent=cont.values[j]
            div.setAttribute("class","naming")
            div.setAttribute("class","xyz")
            if(count==69 || count==70 || count==73 || count==74 || count==75 || count==81 || count==82 ||count==83 ||count==66 ||count==65 ||count==61 ||count==62 ||count==58 ||count==57 ||count==53 ||count==49  || count==45 ){
                div.textContent="--"
                div.setAttribute("class","xyz_exception")
            }
            if(count==77){
                div.setAttribute("class","xyz_exception")
                div.textContent="50GB"
            }
            if(count==78){
                div.setAttribute("class","xyz_exception")
                div.textContent="500GB"
            }
            if(count==79){
                div.setAttribute("class","xyz_exception")
                div.textContent="1TB"
            }
            if(count==80){
                div.setAttribute("class","xyz_exception")
                div.textContent="2TB"
            }
            d.appendChild(div)
        
        }
        d.setAttribute("class","odd_Even")
        d.setAttribute("class","hover odd_Even")
        tocont.appendChild(d)
    }
}


function cust_mang(){
    count=0
    for(var i=0;i<cont.cust_mang.length;i++){
        var d=document.createElement("div")
        var p=document.createElement("p")
        p.textContent=cont.cust_mang[i]
        d.appendChild(p)
        p.setAttribute("class","title")
        for(var j=0;j<cont.values.length;j++){
            count++
            var div=document.createElement("p")
            // div.textContent=cont.values[j]
            div.setAttribute("class","naming")
            div.setAttribute("class","xyz")
            if(count==17 || count==18 || count==73 || count==74 || count==75 || count==81 || count==82 ||count==83 ||count==66 ||count==65 ||count==61 ||count==62 ||count==58 ||count==57 ||count==53 ||count==49  || count==45 ){
                div.textContent="--"
                div.setAttribute("class","xyz_exception")
            }
            d.appendChild(div)
        
        }
        d.setAttribute("class","odd_Even")
        d.setAttribute("class","hover odd_Even")
        to_cust_mang.appendChild(d)
    }
}

function Help_dsk(){
    count=0
    for(var i=0;i<cont.Help_desk_Automation.length;i++){
        var d=document.createElement("div")
        var p=document.createElement("p")
        p.textContent=cont.Help_desk_Automation[i]
        d.appendChild(p)
        p.setAttribute("class","title")
        for(var j=0;j<cont.values.length;j++){
            count++
            var div=document.createElement("p")
            // div.textContent=cont.values[j]
            div.setAttribute("class","naming")
            div.setAttribute("class","xyz")
            if(count==43 || count==42 || count==41 || count==38 || count==37 || count==34 || count==33 ||count==29 ||count==25 ||count==21 ){
                div.textContent="--"
                div.setAttribute("class","xyz_exception")
            }
            
            d.appendChild(div)
        
        }
        d.setAttribute("class","odd_Even")
        d.setAttribute("class","hover odd_Even")
        to_help_desk.appendChild(d)
    }
}
function main(){
   
    heading()
    first()
    cust_mang()
    Help_dsk()
    count=0
    
// ---------------------------------------------


// ---------------------------------------------------------

// ----------------------------------------------------
for(var i=0;i<cont.Supt_Center.length;i++){
    var d=document.createElement("div")
    var p=document.createElement("p")
    p.textContent=cont.Supt_Center[i]
    d.appendChild(p)
    p.setAttribute("class","title")
    for(var j=0;j<cont.values.length;j++){
        count++
        var div=document.createElement("p")
        // div.textContent=cont.values[j]
        div.setAttribute("class","naming")
        div.setAttribute("class","xyz")
        if(count==46 || count==45 || count==41 || count==37 || count==33 || count==29 ){
            div.textContent="--"
            div.setAttribute("class","xyz_exception")
        }
        if(count==44){
            div.setAttribute("class","xyz_exception")
            div.textContent="25 brands"
        }
        if(count==43){
            div.setAttribute("class","xyz_exception")
            div.textContent="15 brands"
        }
        if(count==42){
            div.setAttribute("class","xyz_exception")
            div.textContent="5 brands"
        }
        d.appendChild(div)
    
    }
    d.setAttribute("class","odd_Even")
    d.setAttribute("class","hover odd_Even")
    to_Supt_center.appendChild(d)
}
// --------------------------------------------------------
}

main()


 
