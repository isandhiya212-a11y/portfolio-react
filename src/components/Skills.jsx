function Skills() {

const skills=[
"HTML",
"CSS",
"JavaScript",
"React",
"Git",
"GitHub",
"Bootstrap",
"Responsive Design"
];

return(

<section id="skills" className="skills">

<div className="container">

<h2>Skills</h2>

<div className="skill-grid">

{
skills.map((skill,index)=>(
<div className="skill-card" key={index}>
{skill}
</div>
))
}

</div>

</div>

</section>

)

}

export default Skills;