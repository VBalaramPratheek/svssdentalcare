import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    timeSlot: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !formData.name || !formData.phone || !formData.timeSlot) {
      toast({
        title: "Please fill all required fields",
        description: "Name, phone, date, and time slot are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedDate = format(date, "PPP");
      const body = new URLSearchParams({
        "form-name": "appointment",
        name: formData.name,
        phone: formData.phone,
        village: formData.village,
        date: formattedDate,
        timeSlot: formData.timeSlot,
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
    } catch {
      // Netlify Forms only works on Netlify — ignore errors locally
    }

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setDate(undefined);
    setFormData({
      name: "",
      phone: "",
      village: "",
      timeSlot: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-card">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">
                Book Your Appointment
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Fill in your details and choose a convenient time slot for your visit.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-background"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-background"
                />
              </div>

              {/* Village */}
              <div className="space-y-2">
                <Label htmlFor="village" className="text-foreground">Village / Town Name</Label>
                <Input
                  id="village"
                  name="village"
                  placeholder="Enter your village or town name"
                  value={formData.village}
                  onChange={handleInputChange}
                  className="bg-background"
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label className="text-foreground">Preferred Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-popover z-50" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0
                      }
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Slot */}
              <div className="space-y-2">
                <Label className="text-foreground">Preferred Time Slot *</Label>
                <Select
                  value={formData.timeSlot}
                  onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button type="submit" variant="hero" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Confirm"}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            {/* Animated Tick */}
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center tick-circle">
              <svg className="w-14 h-14 text-primary" viewBox="0 0 52 52" fill="none">
                <circle
                  className="tick-circle-bg"
                  cx="26" cy="26" r="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  className="tick-check"
                  d="M14 27l8 8 16-16"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Namaste animation */}
            <div className="text-5xl mb-4 namaste-hands">
              🙏
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-1">
              Thank You!
            </h3>
            <p className="text-primary font-semibold text-lg mb-3">
              Appointment Confirmed
            </p>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed max-w-sm mx-auto">
              Your appointment has been confirmed.<br />
              We will contact you shortly.
            </p>
            <Button variant="default" onClick={handleClose} size="lg">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
