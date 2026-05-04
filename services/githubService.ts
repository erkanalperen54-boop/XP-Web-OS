
import { Project } from '../types';

export const fetchGitHubRepos = async (username: string): Promise<Project[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!response.ok) throw new Error('Failed to fetch repositories');
    const data = await response.json();
    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description provided.',
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language || 'Miscellaneous',
      updated_at: repo.updated_at
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};
