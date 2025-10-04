import { Code2, Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-mono font-bold text-lg">
                Coding<span className="text-primary">ForChange</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering students to code with purpose. Free education, real impact.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              {'// 501(c)(3) nonprofit organization'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-mono font-semibold mb-4 text-primary">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#get-involved" className="text-muted-foreground hover:text-primary transition-colors">Volunteer</a></li>
              <li><a href="#get-involved" className="text-muted-foreground hover:text-primary transition-colors">Donate</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground font-mono mb-4 md:mb-0">
            © {currentYear} Coding for a Change. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:contact@codingforachange.org" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
