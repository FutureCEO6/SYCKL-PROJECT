import Card from "../components/Card";

export default function Home() {
    return (
        <div>
            <h2>Welcome to SYCKL</h2>
            <p>Your companion in managing Sickle Cell Disease. Explore resources, affirmations, self-care tips, and inspiring stories from fellow warriors.</p>

            <div className="grid">
                <Card title="Education" text="Learn about Sickle Cell Disease, its symptoms, treatments, and management strategies." />
                <Card title="Crisis Guide" text="Access quick tips and steps to take during a sickle cell crisis." />
                <Card title="Affirmations" text="Boost your morale with daily affirmations tailored for Sickle Cell Warriors." />
                <Card title="Self-Care Tips" text="Discover self-care routines and practices to help you stay healthy and positive." />
                <Card title="Stories" text="Read inspiring stories from warriors & families living with Sickle Cell Disease." />
            </div>
        </div>
    );
}