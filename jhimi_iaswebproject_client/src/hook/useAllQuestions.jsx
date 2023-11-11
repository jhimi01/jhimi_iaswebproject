import { useQuery } from '@tanstack/react-query';

const useAllQuestions = () => {
    const { isLoading, data : questions = [], refetch } = useQuery({
        queryKey: ['questions'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/qustions')
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return { questions, isLoading, refetch }
};

export default useAllQuestions;