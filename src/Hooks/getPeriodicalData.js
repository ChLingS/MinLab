import { ref, onMounted } from 'vue';

export function usePeriodicals() {
  const periodicals = ref([]);

  const fetchPeriodicals = async () => {
    try {
      const response = await fetch('/MinLab/Json/periodicalData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      periodicals.value = data.sort((a, b) =>
        new Date(a.date) - new Date(b.date)).reverse();
    } catch (error) {
      console.error('Error fetching periodicals:', error);
    }
  };

  onMounted(fetchPeriodicals);

  return { periodicals };
}
