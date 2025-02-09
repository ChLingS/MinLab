import { ref, onMounted } from 'vue';

export function usePapers() {
  const papers = ref([]);

  const fetchPapers = async () => {
    try {
      const response = await fetch('/MinLab/Json/liveData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      papers.value = data;
    } catch (error) {
      console.error('Error fetching papers:', error);
    }
  };

  onMounted(fetchPapers);

  return { papers };
}
