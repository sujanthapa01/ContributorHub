import { Star, Github, Heart, MapPin, Calendar, ExternalLink, Code2, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import contributors from '@/data/contributors.json'; // Assuming contributors.json is in the data folder

// Mock data structure that matches what contributors.json would contain

const mockContributors = contributors.map(contributor => ({
  id: contributor.id,
  name: contributor.full_name,
  username: contributor.github,
  bio: contributor.short_bio,
  avatar: contributor.avatar,
  location: contributor.location,
  languages: contributor.languages,
  joinedDate: new Date(contributor.created_at).toLocaleDateString(),
  profile: contributor.profile,
  blog: contributor.blog || 'null'
}));


const getLanguageColor = (language: string) => {
  const colors: Record<string, string> = {
    'Java': 'bg-java text-white',
    'Python': 'bg-python text-white',
    'Javascript': 'bg-javascript text-black',
    'Typescript': 'bg-typescript text-white',
    'React': 'bg-react text-black',
    'Go': 'bg-go text-white',
    'C++': 'bg-cpp text-white'
  };
  return colors[language] || 'bg-muted text-muted-foreground';
};

const inspirationalQuotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Code is poetry written in logic. - Anonymous",
  "Open source is the foundation of innovation. - Anonymous",
  "Together we build the future, one commit at a time. - Community"
];

const ContributorCard = ({ contributor }: { contributor: typeof mockContributors[0] }) => (
  <Card className={`
    bg-card border-border hover:border-primary/50 transition-all duration-300 
    hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1
   }
  `}>
    <div className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={contributor.avatar}
            alt={contributor.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-border"
          />

        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{contributor.name}</h3>
            {contributor.id === 1 && (
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            )}
          </div>
          <p className="text-muted-foreground text-sm">@{contributor.username}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <MapPin className="w-3 h-3" />
            {contributor.location}
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10">
            <a href={contributor.profile} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" /></a>
          </Button>
          <Button size="sm" variant="ghost" className={`h-8 w-8 p-0 hover:bg-primary/10 ${contributor.blog === "null" ? 'hidden' : ''}`}>
            <a href={contributor.blog } target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" /></a>
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {contributor.bio}
      </p>

      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2">Languages</p>
        <div className="flex flex-wrap gap-2">
          {contributor.languages.map((lang) => (
            <Badge
              key={lang}
              className={`${getLanguageColor(lang)} text-xs px-2 py-1 rounded-full border-0`}
            >
              {lang}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          Joined {contributor.joinedDate}
        </div>
      </div>
    </div>
  </Card>
);

const Index = () => {
  const totalContributors = mockContributors.length;
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  ContribHub
                </h1>
                <p className="text-xs text-muted-foreground">Premium Contributors Platform</p>
              </div>
            </div>


            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                <Github className="w-4 h-4 mr-2" />
                View Source
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                <Heart className="w-4 h-4 mr-2" />
                Sponsor
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.primary/10),transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Welcome to the Amazing Contributors Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent leading-tight">
            Meet the Amazing Developers
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet the amazing developers who contribute to our open source ecosystem.
            After your contribution, run the Python script to see yourself featured here!
          </p>

          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{totalContributors}</div>
              <div className="text-sm text-muted-foreground">Amazing Contributors</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{totalContributors}</div>
              <div className="text-sm text-muted-foreground">Total Contributions</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">Open</div>
              <div className="text-sm text-muted-foreground">For Everyone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Grid */}
      <section id="contributors" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Amazing</span> Contributors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These incredible developers have contributed to our project and helped make it better.
              Want to see your card here? Make a contribution and run the Python script!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockContributors.map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20 p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join Our Community!</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Make your first contribution and see your profile featured here.
                It's that simple!
              </p>
              <a href="https://github.com/sujanthapa01/contributor-cash-splash/blob/main/README.md" target='_blank' rel='noopener noreferrer'>
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  How to Contribute
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-card border-t border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">ContribHub</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Celebrating developers who contribute to open source and build the future of technology.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Inspirational Quotes</h4>
              <div className="space-y-3">
                {inspirationalQuotes.slice(0, 2).map((quote, index) => (
                  <blockquote key={index} className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-4">
                    "{quote}"
                  </blockquote>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#contributors" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  View Contributors
                </a>
                <a href="https://github.com" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub Repository
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How to Contribute
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  Made with ❤️ by the open source community
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Created by <span className="text-primary font-medium">an amazing developer</span> •
                  Designed for beginners with love
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-xs text-muted-foreground">
                  © 2024 ContribHub. Built with React & Tailwind CSS
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Run your Python script to update the contributors.json file
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
