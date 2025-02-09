import { ref, onMounted } from 'vue';

export function usePersons() {
  const persons = ref([]);

  const fetchPersons = async () => {
    try {
      const response = await fetch('/MinLab/Json/personData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      persons.value = data.sort((a, b) =>
        a.grade - b.grade);
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  };


  onMounted(fetchPersons);

  return { persons };
}
