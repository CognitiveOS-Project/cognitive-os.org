import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const repos = [
  {name: 'product-specs', role: 'Standards, schemas, .cgp format', lang: 'Markdown/JSON'},
  {name: 'sdlc', role: 'SDLC tooling, CI, health checks', lang: 'Shell'},
  {name: 'cpm', role: 'Cognitive Package Manager', lang: 'Go'},
  {name: 'core-mcp-bridges', role: 'Hardware bridge interfaces', lang: 'Go'},
  {name: 'inference', role: 'Model runner (CGo bindings)', lang: 'Go/C'},
  {name: 'cognitiveosd', role: 'System daemon (message bus)', lang: 'Go'},
  {name: 'cli', role: 'Bubble Tea TUI frontend', lang: 'Go'},
  {name: 'cognitiveos-distro', role: 'Alpine image builder', lang: 'Shell/Docker'},
  {name: 'cgp-template', role: '.cgp boilerplate', lang: 'Template'},
  {name: 'registry-server', role: 'Package registry', lang: 'Go'},
];

const principles = [
  {title: 'AI is the OS, not an app', desc: 'The AI owns hardware, resources, software lifecycle, and interaction. No fallback desktop. No settings app.'},
  {title: 'One user: the AI', desc: 'No user accounts, no permission groups. The AI has unfettered hardware access.'},
  {title: 'Self-managing', desc: 'The AI discovers, installs, and removes its own capabilities. The human never touches a package manager.'},
  {title: 'Ephemeral interface', desc: 'No windows, no home screen, no app grid. UI exists only for the duration of a task.'},
  {title: 'Universal substrate', desc: 'Same architecture from a smartwatch to a server. The only difference is where the model runs.'},
];

function Hero() {
  return (
    <header
      style={{
        textAlign: 'center',
        padding: '3rem 0 2.5rem',
        marginBottom: '1rem',
      }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 700,
        color: '#58a6ff',
        marginBottom: '0.3rem',
        letterSpacing: '-1px',
      }}>
        Cognitive<span style={{color: '#f0f6fc'}}>OS</span>
      </h1>
      <div style={{
        fontSize: '1.15rem',
        fontWeight: 600,
        color: '#f0f6fc',
        marginBottom: '0.5rem',
      }}>
        An AI-native operating system
      </div>
      <div style={{
        fontSize: '0.95rem',
        color: '#8b949e',
        maxWidth: 480,
        margin: '0 auto',
      }}>
        Replace app-centric computing with intent-centric computing.
      </div>
    </header>
  );
}

function Section({title, children}: {title?: string; children: ReactNode}) {
  return (
    <div style={{margin: '2.5rem 0'}}>
      {title && (
        <h2 style={{
          fontSize: '1.15rem',
          color: '#f0f6fc',
          marginBottom: '0.8rem',
          borderBottom: '1px solid #21262d',
          paddingBottom: '0.4rem',
        }}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="CognitiveOS"
      description="CognitiveOS is an AI-native operating system. No apps. No browsers. No permission dialogs. Intent-centric computing.">
      <main style={{maxWidth: 820, margin: '0 auto', padding: '0 1.5rem 3rem'}}>
        <Hero />

        <Section>
          <p style={{color: '#c9d1d9', marginBottom: '0.8rem'}}>
            Computing today is <strong>app-centric</strong>. Every task means finding, opening, and learning an app. Granting permissions. Switching between windows. Managing files. The operating system does nothing — it is a blank slate that offloads every responsibility onto the user.
          </p>
          <p style={{color: '#c9d1d9', marginBottom: '0.8rem'}}>
            CognitiveOS replaces this with <strong>intent-centric</strong> computing:
          </p>
          <pre style={{
            background: '#161b22',
            padding: '1rem',
            borderRadius: 6,
            overflowX: 'auto',
            margin: '0.8rem 0',
            border: '1px solid #21262d',
            fontFamily: '"SF Mono", "Fira Code", "JetBrains Mono", monospace',
            fontSize: '0.9rem',
            color: '#f0f6fc',
          }}>{`1. Start the device
2. Ask AI (speak or text)
3. AI does something`}</pre>
          <p style={{color: '#8b949e', fontSize: '0.9rem'}}>
            That is the complete interaction model. The human sets goals. The AI operates the machine.
          </p>
        </Section>

        <Section title="Design Principles">
          {principles.map((p) => (
            <div key={p.title} className="principle-block">
              <strong>{p.title}</strong> — {p.desc}
            </div>
          ))}
        </Section>

        <Section title="Architecture">
          <p style={{color: '#c9d1d9', marginBottom: '0.8rem'}}>
            Two-tier AI brain on Alpine Linux, controlled via Bubble Tea TUI talking to hardware through MCP bridges:
          </p>
          <pre style={{
            background: '#161b22',
            padding: '1rem',
            borderRadius: 6,
            overflowX: 'auto',
            margin: '0.8rem 0',
            border: '1px solid #21262d',
            fontFamily: '"SF Mono", "Fira Code", "JetBrains Mono", monospace',
            fontSize: '0.85rem',
            color: '#f0f6fc',
            lineHeight: 1.3,
          }}>{`┌─────────────────────────────────────────────────────┐
│                    User (Human)                      │
├─────────────────────────────────────────────────────┤
│                    Bubble Tea TUI (cli)              │
├─────────────────────────────────────────────────────┤
│         cognitiveosd (daemon — message bus)          │
├──────────────────┬──────────────────────────────────┤
│   Raw Model      │    Wide Model (inference)         │
│   (local, MCU)   │    (local or remote .gguf)       │
├──────────────────┴──────────────────────────────────┤
│  MCP Bridges: display, audio, network, gpio, serial  │
├─────────────────────────────────────────────────────┤
│              Alpine Linux + /dev/fb0                 │
└─────────────────────────────────────────────────────┘`}</pre>
        </Section>

         <Section title="Download">
           <div className="download-card">
             <h3>Distro Images</h3>
             <p style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '1rem'}}>
               Hardware-optimized images for 6 variants: Standard, Titan, Edge, Gateway, and Micro (across x86_64, aarch64, and armv7).
             </p>
             <a
               href="https://github.com/CognitiveOS-Project/cognitiveos-distro/releases"
               className="button"
               style={{
                 display: 'inline-block',
                 padding: '0.5rem 1.2rem',
                 background: '#21262d',
                 border: '1px solid #30363d',
                 borderRadius: 6,
                 color: '#c9d1d9',
                 fontFamily: 'inherit',
                 fontSize: '0.85rem',
                 cursor: 'pointer',
                 transition: 'all 0.15s',
                 marginRight: '0.75rem',
                 marginBottom: '0.5rem',
                 textDecoration: 'none',
               }}>
               Browse All Releases →
             </a>
             <code style={{fontSize: '0.8rem', color: '#8b949e'}}>
               cognitiveos-v0.4.0-standard-x86_64.iso
             </code>
           </div>
 
           <div className="download-card">
             <h3>Docker Image</h3>
             <p style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '1rem'}}>
               Runtime image for using CognitiveOS components inside a container.
             </p>
             <code style={{fontSize: '0.85rem', background: '#0d1117'}}>
               docker pull ghcr.io/CognitiveOS-Project/cognitiveos-distro:v0.4.0-standard-x86_64
             </code>
           </div>
         </Section>


        <Section title="Repositories">
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            margin: '0.8rem 0',
          }}>
            <thead>
              <tr>
                <th style={{
                  textAlign: 'left',
                  color: '#8b949e',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  padding: '0.5rem 0.6rem',
                  borderBottom: '1px solid #21262d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Name</th>
                <th style={{
                  textAlign: 'left',
                  color: '#8b949e',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  padding: '0.5rem 0.6rem',
                  borderBottom: '1px solid #21262d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Role</th>
                <th style={{
                  textAlign: 'left',
                  color: '#8b949e',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  padding: '0.5rem 0.6rem',
                  borderBottom: '1px solid #21262d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Language</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((r) => (
                <tr key={r.name} className="repo-row">
                  <td><a href={`https://github.com/CognitiveOS-Project/${r.name}`}>{r.name}</a></td>
                  <td>{r.role}</td>
                  <td>{r.lang}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Status">
          <p style={{color: '#c9d1d9'}}>
            All 7 implementation phases complete. Specs, SDLC, and all repos are implemented and merged. See the{' '}
            <a href="https://github.com/CognitiveOS-Project/sdlc">sdlc</a> repo for the full implementation plan.
          </p>
          <p style={{color: '#c9d1d9', marginTop: '1rem'}}>
            <span style={{color: '#3fb950', fontWeight: 600, fontSize: '0.9rem'}}>✓</span>{' '}
            Health checks passing —{' '}
            <a href="https://github.com/CognitiveOS-Project/sdlc/actions/workflows/healthcheck.yml">weekly CI</a>
          </p>
        </Section>
      </main>
    </Layout>
  );
}
