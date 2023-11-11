import { useQuery } from '@tanstack/react-query';

const useSingleQuestion = ({id}) => {
    const { isLoading, data : singlequestions = [], refetch } = useQuery({
        queryKey: ['singlequestions'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/qustions/${id}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return { singlequestions, isLoading, refetch }
};

export default useSingleQuestion;