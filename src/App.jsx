import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const show = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass = (page) => `nav-link ${activePage === page ? 'on' : ''}`;
  const pageClass = (page) => `page ${activePage === page ? 'on' : ''}`;

  return (
    <div className="site">
      <nav className="nav">
        <div className="brand" onClick={() => show('home')}>SUMANTA MONDAL</div>
        <div className="nav-links">
          <span className={linkClass('home')} id="nl-home" onClick={() => show('home')}>Home</span>
          <span className={linkClass('portfolio')} id="nl-portfolio" onClick={() => show('portfolio')}>Portfolio</span>
          <span className={linkClass('service')} id="nl-service" onClick={() => show('service')}>Service</span>
          <span className={linkClass('product')} id="nl-product" onClick={() => show('product')}>Product</span>
          <span className={linkClass('contact')} id="nl-contact" onClick={() => show('contact')}>Contact</span>
        </div>
      </nav>

      <div className={pageClass('home')} id="pg-home">
        <div className="hero">
          <div className="orb o1"></div><div className="orb o2"></div><div className="orb o3"></div>
          <div className="hgrid"></div>
          <div className="pt pt1"></div><div className="pt pt2"></div><div className="pt pt3"></div><div className="pt pt4"></div>
          <div className="hi">
      
            <h1>Engineering<br /><em>First Impressions</em></h1>
            <p className="hsub">I've spent years studying what <b>Makes People Click</b>. Now I help creators and brands package their videos so the right audience actually stops and watches.</p>
            <div className="hbtns">
              <div className="btnp" onClick={() => show('contact')}>Work With Me</div>
              <div className="btno" onClick={() => show('portfolio')}>View Portfolio</div>
            </div>
            <div className="ghostl">
              <div className="gl" onClick={() => show('service')}>Explore services →</div>
              <div className="gl" onClick={() => show('product')}>Browse products →</div>
            </div>
          </div>
          
        </div>
        <div className="sec">
          <div className="lbl">What I do</div>
          <div className="sh">Simple process. <em>Real results.</em></div>
          <div className="g3" style={{ marginTop: '28px' }}>
            <div className="card"><div className="cnum"></div><h3>Idea</h3><p>I go through your content and figure out what angle is actually worth clicking on.</p></div>
            <div className="card"><div className="cnum"></div><h3>Design</h3><p>Then I build the visual around that idea, nothing random, everything has a reason.</p></div>
            <div className="card"><div className="cnum"></div><h3>Improve</h3><p>Once it is live, I see what the data says and adjust from there.</p></div>
          </div>
        </div>
        <footer className="footer">
          <div className="fc">© 2026 Sumanta Mondal</div>
        </footer>
      </div>

      <div className={pageClass('portfolio')} id="pg-portfolio">
        <div className="ph">
          
        </div>
        <div className="sec" style={{ paddingTop: '2cm' }}>
          <div className="pgrid">
            {[
              { src: '/Websittttte/before%20after%20thumbnail/01/1.jpg', title: '01', subtitle: 'Before' },
              
              { src: '/Websittttte/before%20after%20thumbnail/2/1.jpg', title: '02', subtitle: 'Before' },
          

              { src: '/Websittttte/before%20after%20thumbnail/3/1.jpg', title: '03', subtitle: 'Before' },
                { src: '/Websittttte/before%20after%20thumbnail/4/1.jpg', title: '04', subtitle: 'Before' },
              { src: '/Websittttte/before%20after%20thumbnail/01/2.jpg',title: '01', subtitle: 'After' },
               { src: '/Websittttte/before%20after%20thumbnail/2/2.jpg',title: '02', subtitle: 'After' },
              { src: '/Websittttte/before%20after%20thumbnail/3/2.jpg', title: '03',subtitle: 'After' },
             
            
              { src: '/Websittttte/before%20after%20thumbnail/4/2.jpg',title: '04', subtitle: 'After' },
            ].map((item, idx) => (
              <div className="pcard" key={idx}><img src={item.src} alt="" /><div className="pov"><h4>{item.title}</h4><p>{item.subtitle}</p></div></div>
            ))}
          </div>

            <div className="pgrid" style={{ marginTop: '3cm' }}>
              {[
                { src: '/Websittttte/only%20thumb/1.jpg', title: '01', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/2.jpg', title: '02', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/3.jpg', title: '03', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/54oQFGJ-xAI-HD.jpg', title: '04', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/AQI%20SCAM%202.jpg', title: '05', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Dr%20Madhavi%201%20v2.jpg', title: '06', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Dr%20Madhavi%204v2.jpg', title: '07', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Dr%20Shubham%203v3.jpg', title: '08', subtitle: 'Only Thumb' },
              ].map((item, idx) => (
                <div className="pcard" key={`ot-${idx}`}><img src={item.src} alt="" /><div className="pov"><h4>{item.title}</h4><p>{item.subtitle}</p></div></div>
              ))}
            </div>

            <div className="pgrid" style={{ marginTop: '3cm' }}>
              {[
                { src: '/Websittttte/only%20thumb/Dr%20Shubham%20Digestion%201%20v1.jpg', title: '09', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Dr%20Shubham%20Gas%20Ep%203%20v2.jpg', title: '10', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Dr%20Sumit%204.jpg', title: '11', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Drv3.jpg', title: '12', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Her%20health%20Periods%203%20v2.jpg', title: '13', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Indian%20Food%20Scam%203%20v1.jpg', title: '14', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Infertility%204.jpg', title: '15', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Itz7QvsqJsU-HD.jpg', title: '16', subtitle: 'Only Thumb' },
              ].map((item, idx) => (
                <div className="pcard" key={`ot2-${idx}`}><img src={item.src} alt="" /><div className="pov"><h4>{item.title}</h4><p>{item.subtitle}</p></div></div>
              ))}
            </div>

            <div className="pgrid" style={{ marginTop: '3cm' }}>
              {[
                { src: '/Websittttte/only%20thumb/IVF_Dr_Tanushree%205%20v1.jpg', title: '17', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Nikita%20Thakur%204%20v2.jpg', title: '18', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/OgXJpr-KVEQ-HD.jpg', title: '19', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Parenting%20Myths%201_v3.jpg', title: '20', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Parenting%20Myths%202%20v2%20copy.jpg', title: '21', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/Sangeetha-%20Gym%20Supplement%202%20v3.jpg', title: '22', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/wWDql6HCS7E-HD.jpg', title: '23', subtitle: 'Only Thumb' },
                { src: '/Websittttte/only%20thumb/ZH4r8FOD4Js-HD.jpg', title: '24', subtitle: 'Only Thumb' },
              ].map((item, idx) => (
                <div className="pcard" key={`ot3-${idx}`}><img src={item.src} alt="" /><div className="pov"><h4>{item.title}</h4><p>{item.subtitle}</p></div></div>
              ))}
            </div>

          <div className="card ctac" style={{ marginTop: '32px' }}>
            <div className="lbl" style={{ justifyContent: 'center' }}>Ready to work</div>
            <h2>Want packaging that <em>actually converts?</em></h2>
            <p>Let's talk about your channel and what we can fix.</p>
            <div className="btnp" style={{ display: 'inline-block', cursor: 'pointer' }} onClick={() => show('contact')}>Start a project</div>
          </div>
        </div>
        <footer className="footer">
          <div className="fc">© 2026 Sumanta Mondal</div>
        </footer>
      </div>

      <div className={pageClass('service')} id="pg-service">
        <div className="ph">
          <div className="lbl">Services</div>
          <h1>What I help creators <em>fix and scale</em></h1>
          <p>Thumbnail design, packaging strategy, and click performance built around how viewers actually behave.</p>
        </div>
        <div className="sec" style={{ paddingTop: 0 }}>
          <div className="sg" style={{ marginBottom: '20px' }}>
            <div className="card"><div className="ico">🎯</div><h3>Thumbnail Design</h3><p>Custom concepts to improve glance value, emotional contrast, and click intent.</p></div>
            <div className="card"><div className="ico">🧠</div><h3>Packaging Strategy</h3><p>Stronger title-thumbnail fit, sharper angle development, better packaging logic.</p></div>
            <div className="card"><div className="ico">📈</div><h3>CTR Analysis</h3><p>Review of weak hooks, unclear visuals, and packaging decisions suppressing clicks.</p></div>
          </div>
          <div className="g2" style={{ marginBottom: '20px' }}>
            <div className="card"><h3>Best fit for</h3><ul className="ul"><li>YouTube creators wanting better packaging</li><li>Brands building a premium visual system</li><li>Podcast channels needing episode packaging</li><li>Expert-led channels needing trust + curiosity</li></ul></div>
            <div className="card"><h3>What the work includes</h3><ul className="ul"><li>Angle exploration</li><li>Thumbnail text direction</li><li>Subject and prop hierarchy</li><li>Visual contrast decisions</li><li>Brand tone matching</li></ul></div>
          </div>
          <div className="lbl" style={{ marginBottom: '12px' }}>Past clients</div>
          <div className="cg">
            {[
              { initial: 'T', name: 'Traya Health', desc: 'Full packaging overhaul for the hair health series.' },
              { initial: 'A', name: 'Agritalk', desc: 'Income-driven thumbnails for rural audiences.' },
              { initial: 'H', name: 'Her Health Podcast', desc: 'Podcast warmth meets YouTube click psychology.' },
              { initial: 'V', name: 'Visionary Indians', desc: 'Packaging for entrepreneurship content.' },
            ].map((item, idx) => (
              <div className="card" key={idx}><div className="ci"><div className="cic">{item.initial}</div><div><h4>{item.name}</h4><p>{item.desc}</p></div></div></div>
            ))}
          </div>
        </div>
        <footer className="footer">
          <div className="fb">SUMANTA <em>MONDAL</em></div>
          <div className="fl"><span onClick={() => show('home')}>Home</span><span onClick={() => show('portfolio')}>Portfolio</span><span onClick={() => show('product')}>Product</span><span onClick={() => show('contact')}>Contact</span></div>
          <div className="fc">© 2026 Sumanta Mondal</div>
        </footer>
      </div>

      <div className={pageClass('product')} id="pg-product">
        <div className="ph">
          <div className="lbl">Digital Assets</div>
          <h1>The specialist's <em>toolkit</em></h1>
          <p>PSD packs, ebooks, prompts, and assets distilled from real client work.</p>
        </div>
        <div className="sec" style={{ paddingTop: 0 }}>
          <div className="g4" style={{ marginBottom: '24px' }}>
            {[
              { variant: 'pt1b', title: 'PSD PACK', label: 'Pro Templates', type: 'PSD Pack', heading: 'Thumbnail PSD Pack', desc: 'Master templates for stronger visual punch.', price: '$149' },
              { variant: 'pt2b', title: 'PROMPT PACK', label: 'AI Ideation', type: 'Prompt Collection', heading: 'Prompt Pack', desc: 'Engineered prompts for visual generation.', price: '$49' },
              { variant: 'pt3b', title: 'ASSET PACK', label: 'Overlays + Textures', type: 'Asset Collection', heading: 'Asset Pack', desc: 'Curated overlays for thumbnail workflows.', price: '$79' },
              { variant: 'pt4b', title: 'EBOOK PACK', label: 'Click Psychology', type: 'Ebook', heading: 'Ebook Pack', desc: 'Framework-driven packaging principles.', price: '₹249' },
            ].map((item, idx) => (
              <div className="prcard" key={idx}>
                <div className={`pth ${item.variant}`}>
                  <div className="scl"></div>
                  <div className="ptxt"><b>{item.title}</b>{item.label}</div>
                </div>
                <div className="pbody">
                  <div className="ptype">{item.type}</div>
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                  <div className="ppr">{item.price}</div>
                  <div className="pbtn">Buy Now →</div>
                </div>
              </div>
            ))}
          </div>
          <div className="g3">
            <div className="card"><div className="ico">⚡</div><h3>Proven in production</h3><p>Battle-tested on real client channels before being packaged.</p></div>
            <div className="card"><div className="ico">🎯</div><h3>Immediately usable</h3><p>Open, adapt to your channel, and apply the same day.</p></div>
            <div className="card"><div className="ico">📐</div><h3>System thinking</h3><p>They compound together into a full packaging workflow.</p></div>
          </div>
        </div>
        <footer className="footer">
          <div className="fb">SUMANTA <em>MONDAL</em></div>
          <div className="fl"><span onClick={() => show('home')}>Home</span><span onClick={() => show('portfolio')}>Portfolio</span><span onClick={() => show('service')}>Service</span><span onClick={() => show('contact')}>Contact</span></div>
          <div className="fc">© 2026 Sumanta Mondal</div>
        </footer>
      </div>

      <div className={pageClass('contact')} id="pg-contact">
        <div className="ph">
          <div className="lbl">Inquiry</div>
          <h1>Start a <em>partnership</em></h1>
          <p>Share your channel, your bottleneck, and what you want the packaging to do better. I reply within 24 hours.</p>
        </div>
        <div className="sec" style={{ paddingTop: 0 }}>
          <div className="cgrid">
            <div className="fcard">
              <div className="fhdr">
                <h3>Project inquiry</h3>
                <div className="apill"><span className="ap"></span>Currently available</div>
              </div>
              <div className="form">
                <input className="fi" placeholder="Full Name" type="text" />
                <input className="fi" placeholder="Email Address" type="email" />
                <input className="fi full" placeholder="Channel URL" type="text" />
                <input className="fi" placeholder="Budget Range" type="text" />
                <input className="fi" placeholder="Timeline" type="text" />
                <textarea className="fi full" placeholder="Tell me about the project..." rows="4" style={{ resize: 'none' }}></textarea>
                <button className="fsub">Send Inquiry</button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="hbox">
                <h3>What helps me reply faster</h3>
                <ul className="ul">
                  <li>Your channel link</li>
                  <li>What is underperforming right now</li>
                  <li>Design, strategy, or both?</li>
                  <li>Rough posting frequency</li>
                  <li>Any hard brand rules</li>
                </ul>
              </div>
              <div className="card">
                <h3>Get in touch directly</h3>
                <p style={{ marginBottom: 0, fontSize: '12px' }}>Reach out on any platform — I reply within 24 hours.</p>
                <div className="clinks">
                  <div className="clink"><div className="cion">✉</div><span className="ctxt">sumanta@example.com</span></div>
                  <div className="clink"><div className="cion">in</div><span className="ctxt">LinkedIn — Sumanta Mondal</span></div>
                  <div className="clink"><div className="cion">🛒</div><span className="ctxt">SuperProfile Store</span></div>
                </div>
                <p className="note" style={{ marginTop: '14px' }}>Based in Diamond Harbour, West Bengal.</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="fb">SUMANTA <em>MONDAL</em></div>
          <div className="fl"><span onClick={() => show('home')}>Home</span><span onClick={() => show('portfolio')}>Portfolio</span><span onClick={() => show('service')}>Service</span><span onClick={() => show('product')}>Product</span></div>
          <div className="fc">© 2026 Sumanta Mondal. YouTube Packaging Specialist.</div>
        </footer>
      </div>
    </div>
  );
};

export default App;
