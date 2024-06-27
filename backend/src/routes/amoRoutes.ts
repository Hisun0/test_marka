export default {
  getLeads: (): string => '/api/v4/leads',
  getPipelineStatus: (pipelineId: number, statusId: number) => `/api/v4/leads/pipelines/${pipelineId}/statuses/${statusId}`,
  getManager: (id: number) => `/api/v4/users/${id}`,
};
