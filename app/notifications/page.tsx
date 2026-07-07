import { Heart, MessageCircle, UserPlus } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const items = [
  { icon: Heart, text: "Meera liked your posture update." },
  { icon: MessageCircle, text: "Kabir commented on your confidence challenge." },
  { icon: UserPlus, text: "Anaya started following your journey." }
];

export default function NotificationsPage() {
  return (
    <AppShell title="Notifications">
      <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          return <div key={item.text} className="glass-panel flex items-center gap-4 rounded-3xl p-4"><Icon className="text-coral" /> <span className="font-bold">{item.text}</span></div>;
        })}
      </div>
    </AppShell>
  );
}
