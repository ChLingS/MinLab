import { ref, onMounted } from 'vue';

export function usePatents() {
  const patents = ref([]);

  const fetchPatents = async () => {
    try {
      const response = await fetch('/warming/Json/patentData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      patents.value = data.sort((a, b) =>
        new Date(a.date) - new Date(b.date)).reverse();
    } catch (error) {
      console.error('Error fetching patents:', error);
    }
  };

  onMounted(fetchPatents);

  return { patents };
}
