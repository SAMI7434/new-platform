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
            <div className="hbadge"><span className="bgem"></span>Packaging strategist · Thumbnail designer</div>
            <h1>Engineering<br /><em>First Impressions</em></h1>
            <p className="hsub">I've spent years studying what <b>Makes People Click</b>. Now I help creators and brands package their videos so the right audience actually stops and watches.</b></p>
            <div className="hbtns">
              <div className="btnp" onClick={() => show('contact')}>Work With Me</div>
              <div className="btno" onClick={() => show('portfolio')}>View Portfolio</div>
            </div>
            <div className="ghostl">
              <div className="gl" onClick={() => show('portfolio')}>See selected work →</div>
              <div className="gl" onClick={() => show('service')}>Explore services →</div>
              <div className="gl" onClick={() => show('product')}>Browse products →</div>
            </div>
          </div>
          <div className="hcards">
            <div className="hcard">
          </div>
        </div>
        <div className="trust">
          <span className="ti">Audience Psychology</span>
          <span className="ti">CTR Optimization</span>
          <span className="ti">Visual Packaging</span>
        </div>
        <div className="sec">
          <div className="lbl">What I do</div>
          <div className="sh">Three disciplines. <em>One outcome.</em></div>
          <div className="g3" style={{ marginTop: '28px' }}>
            <div className="card"><div className="cnum">01</div><h3>Thumbnail Design</h3><p>Custom concepts to improve glance value, emotional contrast, and click intent.</p></div>
            <div className="card"><div className="cnum">02</div><h3>Packaging Strategy</h3><p>Stronger title-thumbnail fit, sharper angle development, better packaging logic.</p></div>
            <div className="card"><div className="cnum">03</div><h3>CTR Analysis</h3><p>Review of weak hooks, unclear visuals, and packaging decisions suppressing clicks.</p></div>
          </div>
        </div>
        <footer className="footer">
          <div className="fb">SUMANTA <em>MONDAL</em></div>
          <div className="fl"><span onClick={() => show('portfolio')}>Portfolio</span><span onClick={() => show('service')}>Service</span><span onClick={() => show('product')}>Product</span><span onClick={() => show('contact')}>Contact</span></div>
          <div className="fc">© 2026 Sumanta Mondal</div>
        </footer>
      </div>

      <div className={pageClass('portfolio')} id="pg-portfolio">
        <div className="ph">
          <div className="lbl">Portfolio</div>
          <h1>Curated <em>Masterpieces</em></h1>
          <p>Selected thumbnail and packaging direction built for stronger first impressions and intent-driven clicks.</p>
        </div>
        <div className="sec" style={{ paddingTop: 0 }}>
          <div className="pgrid">
            {[
              { src: 'https://i.ibb.co/GvX3KGsL/Vaibhav-Sisinty-X-2am-v1.jpg', title: 'Podcast Packaging', subtitle: 'Emotional framing' },
              { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=70', title: 'Case Study Concepts', subtitle: 'Storytelling curiosity' },
              { src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=70', title: 'Expert Led Videos', subtitle: 'Trust-focused systems' },
              { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=70', title: 'Brand Led Packaging', subtitle: 'Consistent identity' },
              { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=70', title: 'Business Commentary', subtitle: 'Authority + tension' },
              { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=70', title: 'Educational Videos', subtitle: 'Concept at a glance' },
              { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=70', title: 'Growth Strategy', subtitle: 'Behavior-first thinking' },
              { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=70', title: 'Consulting Work', subtitle: 'Full system thinking' },
            ].map((item, idx) => (
              <div className="pcard" key={idx}><img src={item.src} alt="" /><div className="pov"><h4>{item.title}</h4><p>{item.subtitle}</p></div></div>
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
          <div className="fb">SUMANTA <em>MONDAL</em></div>
          <div className="fl"><span onClick={() => show('home')}>Home</span><span onClick={() => show('service')}>Service</span><span onClick={() => show('product')}>Product</span><span onClick={() => show('contact')}>Contact</span></div>
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
