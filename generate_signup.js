const fs = require('fs');

try {
    const indexHtml = fs.readFileSync('index.html', 'utf8');

    
    const endHeaderTag = '</header>';
    const startFooterTag = '<!-- Main Footer -->';
    
    const headerEndIndex = indexHtml.indexOf(endHeaderTag) + endHeaderTag.length;
    const footerStartIndex = indexHtml.indexOf(startFooterTag);

    const headAndHeader = indexHtml.substring(0, headerEndIndex);
    const footerAndScripts = indexHtml.substring(footerStartIndex);

    
    const authContent = `
    <!-- Creative Auth Section -->
    <section class="auth-section" style="min-height: 100vh; position: relative; background: #0a0a1e; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 100px 0;">
        <!-- Network Interactive Background (CSS) -->
        <div class="network-bg" style="position: absolute; inset: 0; pointer-events: none; opacity: 0.6;">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="nodes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="1.5" fill="rgba(232,25,44,0.4)" />
                        <line x1="50" y1="50" x2="150" y2="50" stroke="rgba(232,25,44,0.1)" stroke-width="0.5" />
                        <line x1="50" y1="50" x2="50" y2="150" stroke="rgba(232,25,44,0.1)" stroke-width="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#nodes)" />
            </svg>
        </div>
        
        <div style="position: absolute; top: 10%; right: 20%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(232,25,44,0.15) 0%, transparent 70%); border-radius: 50%; filter: blur(50px); animation: drift 15s infinite alternate;"></div>
        <div style="position: absolute; bottom: 10%; left: 20%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,100,255,0.1) 0%, transparent 70%); border-radius: 50%; filter: blur(60px); animation: drift 20s infinite alternate-reverse;"></div>

        <div class="auto-container" style="position: relative; z-index: 5;">
            <div class="auth-card" style="max-width: 600px; margin: 0 auto; background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 30px; padding: 60px 40px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); text-align: center;">
                <div class="auth-header" style="margin-bottom: 30px;">
                    <div class="icon-box" style="width: 80px; height: 80px; background: var(--red); border-radius: 50%; margin: 0 auto 25px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(232,25,44,0.4); animation: pulse 2.5s infinite;">
                        <i class="fa fa-user-plus" style="color: white; font-size: 32px;"></i>
                    </div>
                    <h2 style="color: white; font-weight: 800; font-size: 2.5rem; margin-bottom: 10px;">Connect Today</h2>
                    <p style="color: rgba(255,255,255,0.6);">Initialize New Network Node Registration</p>
                </div>

                <div class="status-badge" style="display: inline-flex; align-items: center; gap: 10px; background: rgba(232,25,44,0.1); border: 1px solid rgba(232,25,44,0.2); padding: 5px 15px; border-radius: 20px; font-size: 12px; color: var(--red); margin-bottom: 35px; text-transform: uppercase; letter-spacing: 1px;">
                    <span style="width: 8px; height: 8px; background: var(--red); border-radius: 50%; display: block; box-shadow: 0 0 10px var(--red);"></span>
                    Registration Uplink Active
                </div>

                <form method="post" action="#" class="auth-form" style="display: grid; gap: 15px; text-align: left;">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label style="color: rgba(255,255,255,0.7); font-size: 12px; margin-bottom: 8px; display: block; margin-left: 5px;">FULL LEGAL NAME</label>
                                <input type="text" placeholder="John Doe" style="width: 100%; padding: 15px 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; outline: none; transition: all 0.3s ease;">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label style="color: rgba(255,255,255,0.7); font-size: 12px; margin-bottom: 8px; display: block; margin-left: 5px;">NETWORK ID (USERNAME)</label>
                                <input type="text" placeholder="john_stackly" style="width: 100%; padding: 15px 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; outline: none; transition: all 0.3s ease;">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label style="color: rgba(255,255,255,0.7); font-size: 12px; margin-bottom: 8px; display: block; margin-left: 5px;">COMMUNICATION ADDRESS (EMAIL)</label>
                        <input type="email" placeholder="john@example.com" style="width: 100%; padding: 15px 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; outline: none; transition: all 0.3s ease;">
                    </div>
                    <div class="form-group">
                        <label style="color: rgba(255,255,255,0.7); font-size: 12px; margin-bottom: 8px; display: block; margin-left: 5px;">MASTER SECURITY KEY (PASSWORD)</label>
                        <input type="password" placeholder="••••••••••••" style="width: 100%; padding: 15px 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; outline: none; transition: all 0.3s ease;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: flex; align-items: flex-start; gap: 10px; color: rgba(255,255,255,0.5); font-size: 13px; cursor: pointer;">
                            <input type="checkbox" style="accent-color: var(--red); margin-top: 4px;">
                            <span>I agree to the Network Terms of Service and Data Sharing Protocols.</span>
                        </label>
                    </div>

                    <button class="theme-btn btn-style-one" style="padding: 18px; border-radius: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 15px;">
                        <span class="btn-title">Broadcasting Connection <i class="fa fa-wifi" style="margin-left: 10px;"></i></span>
                    </button>
                </form>

                <div class="auth-footer" style="margin-top: 35px; color: rgba(255,255,255,0.5); font-size: 15px;">
                    Already have a network node? <a href="login.html" style="color: var(--red); font-weight: 700; margin-left: 5px;">Initialize Login</a>
                </div>
            </div>
        </div>

        <style>
            @keyframes drift {
                0% { transform: translate(0, 0) scale(1); }
                100% { transform: translate(50px, 50px) scale(1.1); }
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(232,25,44,0.4); }
                70% { box-shadow: 0 0 0 20px rgba(232,25,44,0); }
                100% { box-shadow: 0 0 0 0 rgba(232,25,44,0); }
            }
            .auth-form input:focus { border-color: var(--red) !important; background: rgba(255,255,255,0.08) !important; box-shadow: 0 0 20px rgba(232,25,44,0.1); }
            .auth-card:hover { border-color: rgba(255,255,255,0.2); }
        </style>
    </section>
    `;

    
    let signupPage = headAndHeader + authContent + footerAndScripts;

    
    signupPage = signupPage.replace('<li class="dropdown"><a href="index.html">Home', '<li><a href="index.html">Home');
    signupPage = signupPage.replace('<li><a href="login.html">Login</a></li>', '<li><a href="login.html">Login</a></li>');

    fs.writeFileSync('signup.html', signupPage);
    console.log('Successfully generated creative signup.html');

} catch (err) {
    console.error('Error:', err);
}
