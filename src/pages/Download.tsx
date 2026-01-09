import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Download, 
  Calendar, 
  User, 
  Package, 
  Shield, 
  Smartphone,
  Monitor,
  LogOut,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const appDetails = {
  name: "Dr. Zoe AI Doctor",
  version: "2.5.1",
  releaseDate: "January 5, 2026",
  publishedBy: "TEB Innovations Pvt. Ltd.",
  size: "45.8 MB",
  category: "Healthcare & Medical",
  rating: "4.8",
  downloads: "50K+",
  requirements: "Android 8.0+ / iOS 14.0+",
  lastUpdated: "January 5, 2026"
};

const features = [
  "AI-powered health diagnostics",
  "Real-time vital monitoring",
  "Tele-doctor video consultations",
  "24/7 health chatbot support",
  "Comprehensive health reports",
  "Multi-language support"
];

const DownloadPage = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDownload = () => {
    // Simulate download
    alert("Download started! Thank you for downloading Dr. Zoe.");
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">Dr. Zoe</span>
          </a>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* App Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-start mb-12"
          >
            {/* App Icon */}
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
              <Stethoscope className="w-16 h-16 text-white" />
            </div>

            {/* App Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {appDetails.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {appDetails.publishedBy}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{appDetails.rating}</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">{appDetails.downloads} downloads</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">{appDetails.category}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={handleDownload}
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Get on Mobile
                </Button>
              </div>
            </div>
          </motion.div>

          {/* App Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          >
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Version</span>
              </div>
              <p className="font-semibold text-foreground">{appDetails.version}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Release Date</span>
              </div>
              <p className="font-semibold text-foreground">{appDetails.releaseDate}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Published By</span>
              </div>
              <p className="font-semibold text-foreground">{appDetails.publishedBy}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Download className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Size</span>
              </div>
              <p className="font-semibold text-foreground">{appDetails.size}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Monitor className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Requirements</span>
              </div>
              <p className="font-semibold text-foreground">{appDetails.requirements}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Last Updated</span>
              </div>
              <p className="font-semibold text-foreground">{appDetails.lastUpdated}</p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <a
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DownloadPage;
