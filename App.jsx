import React from 'react'

const Container = ({children}) => <div style={{maxWidth:1000,margin:'24px auto',padding:16}}>{children}</div>
const Card = ({children}) => <div style={{border:'1px solid #eee',borderRadius:16,padding:16,boxShadow:'0 2px 8px rgba(0,0,0,0.04)',background:'#fff'}}>{children}</div>
const Input = (p) => <input {...p} style={{padding:8,border:'1px solid #ddd',borderRadius:8,width:'100%'}}/>
const Text = (p) => <textarea {...p} style={{padding:8,border:'1px solid #ddd',borderRadius:8,width:'100%',minHeight:100}}/>
const Label = ({children}) => <label style={{fontSize:12,opacity:.7,marginBottom:6,display:'block'}}>{children}</label>
const Btn = ({children, ...p}) => <button {...p} style={{padding:'10px 14px',borderRadius:12,border:'1px solid #ddd',cursor:'pointer',background:'#111',color:'#fff'}}>{children}</button>

const Classic = ({data}) => (
  <div style={{fontFamily:'serif'}}>
    <h1 style={{margin:0}}>{data.name}</h1>
    <div style={{opacity:.7}}>{data.title}</div>
    <p>{data.summary}</p>
    <h3>Skills</h3>
    <ul>{data.skills.split(',').map((s,i)=><li key={i}>{s.trim()}</li>)}</ul>
    <h3>Projects</h3>
    {data.projects.map((p,i)=>(
      <div key={i} style={{marginBottom:12}}>
        <strong>{p.name}</strong> — <a href={p.link} target="_blank" rel="noreferrer">{p.link}</a>
        <div>{p.desc}</div>
      </div>
    ))}
  </div>
)

const Modern = ({data}) => (
  <div style={{fontFamily:'Inter, system-ui'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div>
        <h1 style={{margin:'0 0 4px'}}>{data.name}</h1>
        <div style={{opacity:.7}}>{data.title}</div>
      </div>
      {data.photo && <img src={data.photo} alt="profile" style={{width:96,height:96,borderRadius:'50%',objectFit:'cover'}}/>}
    </div>
    <p style={{marginTop:12}}>{data.summary}</p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:16}}>
      <Card>
        <h3>Skills</h3>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {data.skills.split(',').map((s,i)=><span key={i} style={{border:'1px solid #ddd',padding:'6px 10px',borderRadius:999}}>{s.trim()}</span>)}
        </div>
      </Card>
      <Card>
        <h3>Projects</h3>
        {data.projects.map((p,i)=>(
          <div key={i} style={{marginBottom:12}}>
            <strong>{p.name}</strong> — <a href={p.link} target="_blank" rel="noreferrer">{p.link}</a>
            <div style={{opacity:.9}}>{p.desc}</div>
          </div>
        ))}
      </Card>
    </div>
  </div>
)

export default function App(){
  const [tpl, setTpl] = React.useState('Classic')
  const [data, setData] = React.useState({
    name: '',
    title: 'Frontend Developer',
    summary: '',
    skills: 'React, JavaScript, HTML, CSS',
    photo: '',
    projects: [{name:'',link:'',desc:''}]
  })

  const Template = tpl === 'Classic' ? Classic : Modern

  const updateProject = (i, key, val) => {
    const copy = [...data.projects]
    copy[i] = {...copy[i], [key]: val}
    setData({...data, projects: copy})
  }

  return (
    <Container>
      <h2>🧰 Portfolio Generator</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <Card>
          <h3>Form</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div><Label>Name</Label><Input value={data.name} onChange={e=>setData({...data, name:e.target.value})}/></div>
            <div><Label>Title</Label><Input value={data.title} onChange={e=>setData({...data, title:e.target.value})}/></div>
          </div>
          <div style={{marginTop:12}}><Label>Summary</Label><Text value={data.summary} onChange={e=>setData({...data, summary:e.target.value})}/></div>
          <div style={{marginTop:12}}><Label>Skills (comma separated)</Label><Input value={data.skills} onChange={e=>setData({...data, skills:e.target.value})}/></div>
          <div style={{marginTop:12}}><Label>Photo URL (optional)</Label><Input value={data.photo} onChange={e=>setData({...data, photo:e.target.value})}/></div>
          <h4 style={{marginTop:16}}>Projects</h4>
          {data.projects.map((p,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12, marginBottom:12}}>
              <div><Label>Name</Label><Input value={p.name} onChange={e=>updateProject(i,'name',e.target.value)}/></div>
              <div><Label>Link</Label><Input value={p.link} onChange={e=>updateProject(i,'link',e.target.value)}/></div>
              <div style={{gridColumn:'1 / span 2'}}><Label>Description</Label><Text value={p.desc} onChange={e=>updateProject(i,'desc',e.target.value)}/></div>
            </div>
          ))}
          <div style={{display:'flex',gap:8}}>
            <Btn onClick={()=>setData({...data, projects:[...data.projects,{name:'',link:'',desc:''}]})}>+ Add Project</Btn>
            <Btn onClick={()=>{
              if(data.projects.length>1){
                setData({...data, projects: data.projects.slice(0,-1)})
              }
            }}>Remove Last</Btn>
          </div>
          <div style={{display:'flex',gap:8, marginTop:12}}>
            <select value={tpl} onChange={e=>setTpl(e.target.value)} style={{padding:8,borderRadius:8,border:'1px solid #ddd'}}>
              <option>Classic</option>
              <option>Modern</option>
            </select>
            <Btn onClick={()=>{
              const blob = new Blob([JSON.stringify({template: tpl, data}, null, 2)], {type: 'application/json'})
              const url = URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url
              a.download = 'portfolio.json'
              a.click()
              URL.revokeObjectURL(url)
            }}>Export JSON</Btn>
            <Btn onClick={()=>window.print()}>Print to PDF</Btn>
          </div>
        </Card>
        <Card>
          <h3>Live Preview — {tpl} Template</h3>
          <Template data={data}/>
        </Card>
      </div>
    </Container>
  )
}
