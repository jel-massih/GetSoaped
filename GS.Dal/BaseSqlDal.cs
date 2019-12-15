using System.Globalization;

namespace GS.Dal
{
    public abstract class BaseSqlDal : AbstractDal
    {
        protected BaseSqlDal()
        {
            Init();
        }

        protected BaseSqlDal(string connectionString)
            : base(connectionString)
        {
            Init();
        }

        protected override DbConnectionHelper BuildDbConnection(string connectionString)
        {
            return new SqlConnectionHelper(connectionString);
        }

        protected SqlConnectionHelper OpenNewSqlConnection()
        {
            var connection = BuildDbConnection(GetValidatedConnectionString());
            connection.Open();
            return connection as SqlConnectionHelper;
        }

        private void Init()
        {
            CultureInfo.DefaultThreadCurrentCulture = CultureInfo.GetCultureInfo("en-US");
        }
    }
}
