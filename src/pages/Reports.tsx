import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

const Reports = () => {
  const [formData, setFormData] = useState({
    reportType: "",
    playerName: "",
    description: "",
    evidence: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Report submitted successfully! Staff will review it shortly.");
    setFormData({ reportType: "", playerName: "", description: "", evidence: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Submit a <span className="text-primary">Report</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Report rule violations or submit player feedback
            </p>
          </div>

          <Card className="p-8 border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="reportType">Report Type</Label>
                <Select
                  value={formData.reportType}
                  onValueChange={(value) => setFormData({ ...formData, reportType: value })}
                >
                  <SelectTrigger id="reportType">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rulebreak">Rule Breaking</SelectItem>
                    <SelectItem value="rdm">RDM/VDM</SelectItem>
                    <SelectItem value="failrp">FailRP</SelectItem>
                    <SelectItem value="exploit">Exploiting</SelectItem>
                    <SelectItem value="harassment">Harassment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="playerName">Reported Player Name</Label>
                <Input
                  id="playerName"
                  placeholder="Enter player name or ID"
                  value={formData.playerName}
                  onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about the incident..."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="evidence">Evidence Links</Label>
                <Input
                  id="evidence"
                  placeholder="YouTube, Streamable, or screenshot links"
                  value={formData.evidence}
                  onChange={(e) => setFormData({ ...formData, evidence: e.target.value })}
                />
                <p className="text-sm text-muted-foreground">
                  Provide video or screenshot evidence if available
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Report
              </Button>
            </form>
          </Card>

          <Card className="mt-6 p-6 border-primary/20 bg-primary/5">
            <p className="text-sm text-foreground">
              <strong className="text-primary">Note:</strong> False reports or spam may result in 
              disciplinary action. Only submit legitimate reports with proper evidence.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
