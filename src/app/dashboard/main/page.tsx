import { WidgetsGrid } from "@/components/dashboard/WiggetsGrid";

export const metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title',
}

export default function MainPage() {
  return (
    <div className="py-8 mx-auto max-w-4xl">
      <span className='text-5xl text-center py-6'>Dashboard</span>
        <WidgetsGrid />
    </div>
  );
}
