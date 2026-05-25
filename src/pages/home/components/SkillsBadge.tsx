export const SkillsBadge = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-gray-300 transition-colors duration-200 hover:border-orange-400/60 hover:text-gray-100">
        {icon}
        {name}
    </div>
);