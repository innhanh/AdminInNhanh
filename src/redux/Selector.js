export const Selector = {
    Admin: {
        SelectorAdmin: (state) => state.AdminSlice.Admin,
    },
    Categorys: {
        SelectorCategorys: (state) => state.ListCateSuccess.Categorys
    },
    Companys: {
        SelectorCompany: (state) => state.CompanySlice.Company
    }

}