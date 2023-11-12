import { useQuery } from '@tanstack/react-query';

const useAllQuestions = () => {
    const { isLoading, data : questions = [], refetch } = useQuery({
        queryKey: ['questions'],
        queryFn: async () => {
            const response = await fetch('https://jhimi-iaswebproject-server.vercel.app/qustions')
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return { questions, isLoading, refetch }
};

export default useAllQuestions;