it('matches snapshot with no article', () => {
  const component = render(
    <Gists />
  );
   expect(component).toMatchSnapshot();
});
