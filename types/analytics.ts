/**
 * @typedef AnalyticsItem
 *
 * @property {string} name - Name of the month
 * @property {number} uniqueViews - Number of unique views
 * @property {number} pageViews - Number of page views
 * @property {number} amountTimeOnSite - Amount of time on site
 */

export interface AnalyticsItem {
  name: string;
  uniqueViews: number;
  pageViews: number;
  amountTimeOnSite: number;
}
